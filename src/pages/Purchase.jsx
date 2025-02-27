import ConfirmModal from "@/components/modals/ConfirmModal";
import Pagination from "@/components/pagination/Pagination";
import EmptyPurchase from "@/components/purchase/list/EmptyPurchase";
import PurchaseItem from "@/components/purchase/list/PurchaseItem";
import Spin from "@/components/spin/Spin";
import Tabs from "@/components/tabs/Tabs";
import { ORDER_PAGE_SIZE } from "@/constants";
import { useDynamicTitle } from "@/hooks";
import { cancelOrder, getOrders } from "@/services/orderService";
import { OrderStatus } from "@/utils/status/OrderStatus";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuSearch } from "react-icons/lu";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const tabs = {
  all: {
    key: "all",
    label: "Tất cả",
    // tabContent: <AllPurchases />,
    trans: "purchase.status.all",
  },
  pending_confirm: {
    key: OrderStatus.pending,
    label: "Chờ xác nhận",
    // tabContent: <ConfirmationPending />,
    trans: "purchase.status.to_confirm",
  },
  preparing: {
    key: OrderStatus.preparing,
    label: "Đang chuẩn bị",
    // tabContent: <Preparing />,
    trans: "purchase.status.to_prepare",
  },
  shipping: {
    key: OrderStatus.delivering,
    label: "Đang vận chuyển",
    // tabContent: <Shipping />,
    trans: "purchase.status.to_ship",
  },
  completed: {
    key: OrderStatus.completed,
    label: "Hoàn thành",
    // tabContent: <Completed />,
    trans: "purchase.status.completed",
  },
  cancelled: {
    key: OrderStatus.canceled,
    label: "Đã hủy",
    // tabContent: <Cancelled />,
    trans: "purchase.status.cancelled",
  },
};

const Purchase = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.purchase"));

  const [loading, setLoading] = useState(false);

  const [tabKey, setTabKey] = useState(tabs.all.key);
  const [currentPage, setCurrentPage] = useState(1);

  const [purchases, setPurchases] = useState(
    Array.from({ length: 5 }, (v, k) => k + 1),
  );
  const [pagination, setPagination] = useState({ total: 0, count: 0 });

  const [cancel, setCancel] = useState({
    show: false,
    data: null,
    loading: false,
  });

  const fetchOrders = async (userID, search, status, page, limit) => {
    setLoading(true);
    const res = await getOrders(userID, { search, status, page, limit });

    if (res && res.EC === StatusCodes.SUCCESS) {
      setPurchases(res.DT?.data);
      setPagination({
        total: res.DT?.pagination?.total,
        count: res.DT?.pagination?.count,
      });
    }

    setLoading(false);
  };

  const user = useSelector((state) => state.user.account);
  useEffect(() => {
    if (user?._id && tabKey && currentPage) {
      fetchOrders(user?._id, null, tabKey, currentPage, ORDER_PAGE_SIZE);
    }
  }, [tabKey, currentPage]);

  const handleRequestCancel = (data) => {
    setCancel((prev) => ({ ...prev, show: true, data: data }));
  };

  const handleCancel = async () => {
    if (cancel.data) {
      setCancel((prev) => ({ ...prev, loading: true }));
      const res = await cancelOrder(cancel.data?._id);

      if (res && res.EC === StatusCodes.SUCCESS) {
        toast.success(res.EM);
        setCancel({ show: false, data: null, loading: false });
        await fetchOrders(
          user?._id,
          null,
          tabKey,
          currentPage,
          ORDER_PAGE_SIZE,
        );
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
        setCancel((prev) => ({ ...prev, loading: false }));
      }
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchKey = formData.get("search");

    await fetchOrders(
      user?._id,
      searchKey,
      tabKey,
      currentPage,
      ORDER_PAGE_SIZE,
    );
  };

  return (
    <div className="h-full w-full space-y-4 bg-app-background">
      <div className="rounded-sm bg-white text-black">
        <Tabs
          tabs={Object.values(tabs)}
          activeTab={tabKey}
          onChange={(key) => setTabKey(key)}
          translation={true}
        />
      </div>
      <form className="relative hidden w-full sm:block" onSubmit={handleSearch}>
        <input
          type="search"
          name="search"
          className="peer block w-full rounded-sm bg-gray-200/60 py-3 pl-12 pr-3 text-13px text-gray-900 outline-none placeholder:text-gray-500"
          placeholder={t("purchase.search")}
        />
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-gray-800">
          <LuSearch className="h-5 w-5" />
        </span>
      </form>
      <div className="space-y-4">
        {loading ? (
          <div className="flex items-center justify-center py-14 text-xl md:py-20 md:text-3xl">
            <Spin />
          </div>
        ) : purchases.length > 0 ? (
          <>
            {purchases.map((item, index) => {
              return (
                <PurchaseItem
                  key={`order-${index}-${item?._id}`}
                  item={item}
                  handleCancel={handleRequestCancel}
                />
              );
            })}
            {pagination.count > 1 && (
              <div className="flex items-center justify-center">
                <Pagination
                  count={pagination?.count}
                  page={currentPage}
                  onChange={(_, page) => setCurrentPage(page)}
                />
              </div>
            )}
            <ConfirmModal
              show={cancel.show}
              onClose={() =>
                setCancel({ show: false, data: null, loading: false })
              }
              handleOk={handleCancel}
              content={t("purchase.delete_confirm", { id: cancel.data?._id })}
              loading={cancel.loading}
            />
          </>
        ) : (
          <EmptyPurchase />
        )}
      </div>
    </div>
  );
};

export default Purchase;
