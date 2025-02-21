import emptyCart from "@/assets/images/empty-cart.png";
import { PATHS } from "@/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const EmptyCart = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-sm bg-white pb-12 pt-6">
      <img
        src={emptyCart}
        alt="Empty cart..."
        loading="lazy"
        className="w-36 object-contain sm:w-52"
      />
      <div className="text-black">
        <span className="hidden sm:inline">{t("cart.empty_cart")} </span>
        <Link
          to={PATHS.products()}
          className="rounded-md bg-main px-3 py-2.5 text-sm font-medium text-white hover:bg-primary sm:bg-transparent sm:p-0 sm:text-base sm:font-semibold sm:text-main sm:hover:bg-transparent sm:hover:text-primary"
        >
          {t("cart.add_to_cart")}
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
