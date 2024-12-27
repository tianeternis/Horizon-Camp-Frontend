import facebook from "@/assets/images/facebook.webp";
import instagram from "@/assets/images/instagram.webp";
import tiktok from "@/assets/images/tiktok.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactInformation = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-stretch gap-4 md:flex-row lg:gap-6">
        <div className="group w-full space-y-5 rounded-sm bg-white p-6 md:w-1/3">
          <div className="flex w-full">
            <div className="flex items-center justify-center rounded-full bg-main/10 p-3 text-black duration-200 group-hover:bg-main group-hover:text-white sm:p-3.5">
              <FaMapMarkerAlt className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
          <div className="text-lg font-semibold text-main sm:text-xl">
            {t("contact.address")}
          </div>
          <div className="text-13px sm:text-sm">
            Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT
          </div>
        </div>
        <div className="group w-full space-y-5 rounded-sm bg-white p-6 md:w-1/3">
          <div className="flex w-full">
            <div className="flex items-center justify-center rounded-full bg-main/10 p-3 text-black duration-200 group-hover:bg-main group-hover:text-white sm:p-3.5">
              <MdEmail className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
          <div className="text-lg font-semibold text-main sm:text-xl">
            {t("contact.email")}
          </div>
          <div className="break-all text-sm">horizoncamp.support@gmai.com</div>
        </div>
        <div className="group w-full space-y-5 rounded-sm bg-white p-6 md:w-1/3">
          <div className="flex w-full">
            <div className="flex items-center justify-center rounded-full bg-main/10 p-3 text-black duration-200 group-hover:bg-main group-hover:text-white sm:p-3.5">
              <FaPhoneAlt className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
          <div className="text-lg font-semibold text-main sm:text-xl">
            {t("contact.phone")}
          </div>
          <div className="text-13px sm:text-sm">0123456789</div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-6">
        <div className="h-80 w-full lg:h-auto lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8415184420487!2d105.76804037404074!3d10.029933690077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zxJDhuqFpIGjhu41jIEPhuqduIFRoxqE!5e0!3m2!1svi!2s!4v1724778542060!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full divide-y divide-solid divide-black/10 rounded-sm bg-white px-6 lg:w-1/2">
          <div className="space-y-4 py-6">
            <div className="flex items-center gap-6">
              <div className="shrink-0 grow text-base font-semibold uppercase sm:text-lg">
                {t("contact.social")}
              </div>
              <div className="w-full border-t border-solid border-black/10"></div>
            </div>
            <ul className="flex flex-nowrap items-center justify-center gap-2.5">
              <li>
                <Link to="https://www.facebook.com" target="_blank">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-8 duration-300 hover:scale-110 sm:w-10"
                  />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com" target="_blank">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-8 duration-300 hover:scale-110 sm:w-10"
                  />
                </Link>
              </li>
              <li>
                <Link to="https://www.tiktok.com" target="_blank">
                  <img
                    src={tiktok}
                    alt="Tiktok"
                    className="w-8 duration-300 hover:scale-110 sm:w-10"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 py-6">
            <div className="flex items-center gap-6">
              <div className="shrink-0 grow text-base font-semibold uppercase sm:text-lg">
                {t("contact.openHours")}
              </div>
              <div className="w-full border-t border-solid border-black/10"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 grow text-13px font-semibold uppercase text-slate-700 sm:text-sm">
                  {t("contact.days.monday")}
                </div>
                <div className="w-full border-t border-dashed border-black/80"></div>
                <div className="shrink-0 grow text-13px font-semibold text-slate-700 sm:text-sm">
                  07:00 - 22:00
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 grow text-13px font-semibold uppercase text-slate-700 sm:text-sm">
                  {t("contact.days.tuesday")}
                </div>
                <div className="w-full border-t border-dashed border-black/80"></div>
                <div className="shrink-0 grow text-13px font-semibold text-slate-700 sm:text-sm">
                  07:00 - 22:00
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 grow text-13px font-semibold uppercase text-slate-700 sm:text-sm">
                  {t("contact.days.wednesday")}
                </div>
                <div className="w-full border-t border-dashed border-black/80"></div>
                <div className="shrink-0 grow text-13px font-semibold text-slate-700 sm:text-sm">
                  07:00 - 22:00
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 grow text-13px font-semibold uppercase text-slate-700 sm:text-sm">
                  {t("contact.days.thursday")}
                </div>
                <div className="w-full border-t border-dashed border-black/80"></div>
                <div className="shrink-0 grow text-13px font-semibold text-slate-700 sm:text-sm">
                  07:00 - 22:00
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 grow text-13px font-semibold uppercase text-slate-700 sm:text-sm">
                  {t("contact.days.friday")}
                </div>
                <div className="w-full border-t border-dashed border-black/80"></div>
                <div className="shrink-0 grow text-13px font-semibold text-slate-700 sm:text-sm">
                  07:00 - 22:00
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 grow text-13px font-semibold uppercase text-slate-700 sm:text-sm">
                  {t("contact.days.saturday")}
                </div>
                <div className="w-full border-t border-dashed border-black/80"></div>
                <div className="shrink-0 grow text-13px font-semibold text-slate-700 sm:text-sm">
                  08:00 - 18:00
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 grow text-13px font-semibold uppercase text-slate-700 sm:text-sm">
                  {t("contact.days.sunday")}
                </div>
                <div className="w-full border-t border-dashed border-black/80"></div>
                <div className="shrink-0 grow text-13px font-semibold text-slate-700 sm:text-sm">
                  08:00 - 18:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
