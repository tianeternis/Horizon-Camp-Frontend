import logo from "@/assets/images/logo.webp";
import facebook from "@/assets/images/facebook.webp";
import instagram from "@/assets/images/instagram.webp";
import tiktok from "@/assets/images/tiktok.webp";
import cashPayment from "@/assets/images/cash-payment.webp";
import transferPayment from "@/assets/images/transfer-payment.webp";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = ({}) => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-solid border-black/20 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap space-y-8 px-3 py-8 text-black">
        <div className="w-full space-y-6 md:block lg:w-4/12 lg:pr-4">
          <div className="flex flex-col items-center gap-3">
            <Link to="/">
              <img src={logo} className="w-24 duration-300 hover:scale-110" />
            </Link>
            <p className="text-center text-sm">
              <span className="font-medium">Horizon Camp</span> -{" "}
              {t("footer.description")}
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FiMapPin className="h-5 w-5 text-main" />
              <span>Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="h-5 w-5 text-main" />
              <span>0123456789</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="h-5 w-5 text-main" />
              <span>horizoncamp.support@gmai.com</span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-wrap space-y-8 sr-500:space-y-0 lg:w-8/12">
          <div className="w-full space-y-2.5 sr-500:w-1/2 md:block md:w-1/3 lg:px-4">
            <h4 className="text-base font-bold uppercase">
              {t("footer.about")}
            </h4>
            <ul className="text-sm">
              <li className="py-1.5">
                <Link to="/" className="hover:text-main">
                  {t("navigation.home")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/about" className="hover:text-main">
                  {t("footer.introduction")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/product" className="hover:text-main">
                  {t("navigation.product")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/contact" className="hover:text-main">
                  {t("navigation.contact")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/blog" className="hover:text-main">
                  {t("navigation.picnic-blog")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/faqs" className="hover:text-main">
                  {t("footer.faqs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full space-y-2.5 sr-500:w-1/2 md:block md:w-1/3 lg:px-4">
            <h4 className="text-base font-bold uppercase">
              {t("footer.support")}
            </h4>
            <ul className="text-sm">
              <li className="py-1.5">
                <Link to="/order-instruction" className="hover:text-main">
                  {t("footer.order-instruction")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/delivery-and-receipt" className="hover:text-main">
                  {t("footer.delivery-and-receipt")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/warranty-policy" className="hover:text-main">
                  {t("footer.warranty-policy")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/member-policy" className="hover:text-main">
                  {t("footer.member-policy")}
                </Link>
              </li>
              <li className="py-1.5">
                <Link to="/information-security" className="hover:text-main">
                  {t("footer.information-security")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-wrap space-y-8 md:block md:w-1/3 lg:pl-4">
            <div className="w-full space-y-2.5 sr-500:mt-8 sr-500:w-1/2 md:mt-0 md:w-full">
              <h4 className="text-base font-bold uppercase">
                {t("footer.contact-information")}
              </h4>
              <ul className="flex flex-nowrap items-center gap-2.5">
                <li>
                  <Link to="https://www.facebook.com" target="_blank">
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="w-8 duration-300 hover:scale-110"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com" target="_blank">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="w-8 duration-300 hover:scale-110"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com" target="_blank">
                    <img
                      src={tiktok}
                      alt="Tiktok"
                      className="w-8 duration-300 hover:scale-110"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full space-y-2.5 sr-500:w-1/2 md:w-full">
              <h4 className="text-base font-bold uppercase">
                {t("footer.payment-methods")}
              </h4>
              <ul className="flex flex-nowrap items-center gap-2.5">
                <li>
                  <img
                    src={cashPayment}
                    alt="Cash Payment"
                    className="w-16 rounded-md border border-solid border-black/20"
                  />
                </li>
                <li>
                  <img
                    src={transferPayment}
                    alt="Transfer Payment"
                    className="w-16 rounded-md border border-solid border-black/20"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="mx-auto max-w-screen-xl py-3.5 text-center text-sm text-white">
          {t("footer.copyright")} | © 2024 Horizon Camp
        </div>
      </div>
    </footer>
  );
};

export default Footer;
