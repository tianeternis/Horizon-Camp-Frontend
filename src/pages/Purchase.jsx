import ConfirmModal from "@/components/modals/ConfirmModal";
import EmptyPurchase from "@/components/purchase/list/EmptyPurchase";
import PurchaseItem from "@/components/purchase/list/PurchaseItem";
import Tabs from "@/components/tabs/Tabs";
import { useDynamicTitle } from "@/hooks";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuSearch } from "react-icons/lu";

const tabs = {
  all: {
    key: "all",
    label: "Tất cả",
    // tabContent: <AllPurchases />,
    trans: "purchase.status.all",
  },
  pending_confirm: {
    key: "pending_confirm",
    label: "Chờ xác nhận",
    // tabContent: <ConfirmationPending />,
    trans: "purchase.status.to_confirm",
  },
  preparing: {
    key: "preparing",
    label: "Đang chuẩn bị",
    // tabContent: <Preparing />,
    trans: "purchase.status.to_prepare",
  },
  shipping: {
    key: "shipping",
    label: "Đang vận chuyển",
    // tabContent: <Shipping />,
    trans: "purchase.status.to_ship",
  },
  completed: {
    key: "completed",
    label: "Hoàn thành",
    // tabContent: <Completed />,
    trans: "purchase.status.completed",
  },
  cancelled: {
    key: "cancelled",
    label: "Đã hủy",
    // tabContent: <Cancelled />,
    trans: "purchase.status.cancelled",
  },
};

const Purchase = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.purchase"));

  const [tabKey, setTabKey] = useState(tabs.all.key);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [purchases, setPurchases] = useState(
    Array.from({ length: 5 }, (v, k) => k + 1),
  );
  const [cancel, setCancel] = useState({
    show: false,
    data: null,
    loading: false,
  });

  useEffect(() => {
    const lengths = {
      [tabs.all.key]: 6,
      [tabs.pending_confirm.key]: 1,
      [tabs.preparing.key]: 2,
      [tabs.shipping.key]: 4,
      [tabs.completed.key]: 3,
      [tabs.cancelled.key]: 5,
    };

    setPurchases(Array.from({ length: lengths[tabKey] }, (v, k) => k + 1));
  }, [tabKey]);

  const handleRequestCancel = (data) => {
    setCancel((prev) => ({ ...prev, show: true, data: data }));
  };

  const handleCancel = () => {
    if (cancel.data) {
      setCancel((prev) => ({ ...prev, loading: true }));
      setTimeout(() => {
        setCancel({ show: false, data: null, loading: false });
      }, 3000);
    }
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
      <form className="relative hidden w-full sm:block">
        <input
          value={searchKeyWord}
          onChange={(e) => setSearchKeyWord(e.target.value)}
          className="peer block w-full rounded-sm bg-gray-200/60 py-3 pl-12 pr-3 text-13px text-gray-900 outline-none placeholder:text-gray-500"
          placeholder={t("purchase.search")}
        />
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-gray-800">
          <LuSearch className="h-5 w-5" />
        </span>
      </form>
      <div className="space-y-4">
        {purchases.length > 0 ? (
          <>
            {purchases.map((item, index) => {
              return (
                <PurchaseItem
                  key={`order-${index}-${item?._id}`}
                  // item={item}
                  handleCancel={handleRequestCancel}
                />
              );
            })}
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
