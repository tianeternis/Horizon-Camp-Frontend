import Tabs from "@/components/tabs/Tabs";
import { useDynamicTitle } from "@/hooks";
import { useState } from "react";
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
      <div className="relative hidden w-full sm:block">
        <input
          value={searchKeyWord}
          onChange={(e) => setSearchKeyWord(e.target.value)}
          className="peer block w-full rounded-sm bg-gray-200/60 py-3 pl-12 pr-3 text-13px text-gray-900 outline-none placeholder:text-gray-500"
          placeholder={t("purchase.search")}
        />
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-gray-800">
          <LuSearch className="h-5 w-5" />
        </span>
      </div>
      <div className="space-y-4">
        {/* {tabs[tabKey]?.tabContent} */}
        <div className="h-96 w-full bg-white"></div>
      </div>
    </div>
  );
};

export default Purchase;
