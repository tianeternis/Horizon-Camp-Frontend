import vietnamese from "@/assets/images/vietnamese-language.webp";
import english from "@/assets/images/english-language.webp";
import { useTranslation } from "react-i18next";

const LANGUAGES = {
  VIETNAMESE: "vi",
  ENGLISH: "en",
};

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="group fixed bottom-6 right-6 z-50 h-10 w-10 cursor-pointer rounded-full bg-transparent shadow-lg sm:h-12 sm:w-12">
      <div className="relative flex w-full items-center justify-center rounded-full bg-transparent">
        <img
          src={
            i18n.language === LANGUAGES.VIETNAMESE
              ? vietnamese
              : i18n.language === LANGUAGES.ENGLISH
                ? english
                : vietnamese
          }
          alt="Languages"
          className="w-full rounded-full"
        />
        <div className="invisible absolute -right-3 bottom-full z-40 origin-bottom scale-90 pb-4 opacity-0 transition-all duration-300 will-change-transform group-hover:visible group-hover:scale-100 group-hover:opacity-100 sm:-right-2">
          <div className="relative min-w-32 rounded-sm bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 before:absolute before:-bottom-2 before:right-6 before:h-4 before:w-4 before:rotate-45 before:bg-white sm:min-w-36">
            {[
              {
                lang: LANGUAGES.VIETNAMESE,
                src: vietnamese,
                alt: "Vietnamese",
                trans: "languages.vi",
              },
              {
                lang: LANGUAGES.ENGLISH,
                src: english,
                alt: "English",
                trans: "languages.en",
              },
            ].map((item, i) => (
              <div
                key={`language-${item.lang}-${i}`}
                className={`flex items-center gap-2 px-3 py-2 hover:text-main i${i18n.language === item.lang ? "font-medium text-main" : "text-black"}`}
                onClick={() => changeLanguage(item.lang)}
              >
                <img src={item.src} alt={item.alt} className="w-4 sm:w-5" />
                <span className="text-xs sm:text-sm">{t(item.trans)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
