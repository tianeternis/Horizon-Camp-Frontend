import facebook from "@/assets/images/facebook.webp";
import instagram from "@/assets/images/instagram.webp";
import tiktok from "@/assets/images/tiktok.webp";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.contact"));

  return (
    <BodyLayout>
      <div className="space-y-10">
        <div className="w-full space-y-4 text-center">
          <div className="space-y-1">
            <div className="text-xl font-bold sm:text-2xl">
              {t("contact.title")}
            </div>
            <div className="mx-auto h-0.5 w-40 bg-main"></div>
          </div>
          <div className="text-sm font-medium sm:text-15px">
            {t("contact.sub-title")}
          </div>
        </div>
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
            <div className="break-all text-sm">
              horizoncamp.support@gmai.com
            </div>
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
                  <div className="text-13px shrink-0 grow font-semibold uppercase text-slate-700 sm:text-sm">
                    {t("contact.days.monday")}
                  </div>
                  <div className="w-full border-t border-dashed border-black/80"></div>
                  <div className="text-13px shrink-0 grow font-semibold text-slate-700 sm:text-sm">
                    07:00 - 22:00
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-13px shrink-0 grow font-semibold uppercase text-slate-700 sm:text-sm">
                    {t("contact.days.tuesday")}
                  </div>
                  <div className="w-full border-t border-dashed border-black/80"></div>
                  <div className="text-13px shrink-0 grow font-semibold text-slate-700 sm:text-sm">
                    07:00 - 22:00
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-13px shrink-0 grow font-semibold uppercase text-slate-700 sm:text-sm">
                    {t("contact.days.wednesday")}
                  </div>
                  <div className="w-full border-t border-dashed border-black/80"></div>
                  <div className="text-13px shrink-0 grow font-semibold text-slate-700 sm:text-sm">
                    07:00 - 22:00
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-13px shrink-0 grow font-semibold uppercase text-slate-700 sm:text-sm">
                    {t("contact.days.thursday")}
                  </div>
                  <div className="w-full border-t border-dashed border-black/80"></div>
                  <div className="text-13px shrink-0 grow font-semibold text-slate-700 sm:text-sm">
                    07:00 - 22:00
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-13px shrink-0 grow font-semibold uppercase text-slate-700 sm:text-sm">
                    {t("contact.days.friday")}
                  </div>
                  <div className="w-full border-t border-dashed border-black/80"></div>
                  <div className="text-13px shrink-0 grow font-semibold text-slate-700 sm:text-sm">
                    07:00 - 22:00
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-13px shrink-0 grow font-semibold uppercase text-slate-700 sm:text-sm">
                    {t("contact.days.saturday")}
                  </div>
                  <div className="w-full border-t border-dashed border-black/80"></div>
                  <div className="text-13px shrink-0 grow font-semibold text-slate-700 sm:text-sm">
                    08:00 - 18:00
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-13px shrink-0 grow font-semibold uppercase text-slate-700 sm:text-sm">
                    {t("contact.days.sunday")}
                  </div>
                  <div className="w-full border-t border-dashed border-black/80"></div>
                  <div className="text-13px shrink-0 grow font-semibold text-slate-700 sm:text-sm">
                    08:00 - 18:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 rounded-sm bg-white p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-6">
              <div className="shrink-0 grow text-base font-semibold uppercase sm:text-lg">
                {t("contact.form.title")}
              </div>
              <div className="w-full border-t border-solid border-black/10"></div>
            </div>
            <div className="text-13px sm:text-sm">
              {t("contact.form.description")}
            </div>
          </div>
          <div className="w-full">
            <form className="w-full space-y-5 sm:space-y-8">
              <div className="w-full space-y-5 sm:grid sm:grid-cols-12 sm:gap-8 sm:space-y-0">
                <input
                  id="fullname"
                  className="text-13px block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none sm:col-span-12 sm:text-sm lg:col-span-4"
                  placeholder={t("contact.form.fullname")}
                />
                <input
                  type="email"
                  id="email"
                  className="text-13px block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none sm:col-span-6 sm:text-sm lg:col-span-4"
                  placeholder={t("contact.form.email")}
                />
                <input
                  id="phone"
                  className="text-13px block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none sm:col-span-6 sm:text-sm lg:col-span-4"
                  placeholder={t("contact.form.phone")}
                />
              </div>
              <textarea
                id="content"
                rows="8"
                className="text-13px block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none sm:text-sm"
                placeholder={t("contact.form.content")}
              />
              <div className="w-full text-center">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-main px-10 py-3 text-center text-sm font-semibold text-white hover:bg-primary focus:outline-none sm:w-auto"
                >
                  {t("contact.form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default Contact;
