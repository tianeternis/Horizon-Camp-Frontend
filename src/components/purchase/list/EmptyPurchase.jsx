import { useTranslation } from "react-i18next";
import emptyOrder from "@/assets/images/empty-order.png";

const EmptyPurchase = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-72 flex-col items-center justify-center gap-6 rounded-sm bg-white sm:min-h-80 md:min-h-96">
      <img
        src={emptyOrder}
        loading="lazy"
        className="h-20 w-20 object-contain md:h-28 md:w-28"
      />
      <div className="text-sm font-medium text-black">
        {t("purchase.empty_data")}
      </div>
    </div>
  );
};

export default EmptyPurchase;
