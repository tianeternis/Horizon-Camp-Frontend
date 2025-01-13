import { useTranslation } from "react-i18next";
import "./Tabs.css";

const Tabs = ({
  tabs = [],
  tabClass = "",
  onChange = (key) => {},
  activeTab,
  activeStyle = {
    borderColor: "var(--color-main)",
    color: "#ff8100",
  },
  translation = false,
}) => {
  const handleChangeTab = (key) => {
    onChange(key);
  };

  const { t } = useTranslation();

  return (
    <ul className="tabs flex w-full items-center overflow-x-auto overflow-y-hidden">
      {tabs.map((tab, i) => {
        return (
          <li
            key={`${tab.key}_${i}`}
            className={`flex-1 cursor-pointer text-nowrap border-b-2 border-solid border-black/5 px-3 py-3 text-center text-13px font-medium transition-colors duration-200 sm:py-4 sm:text-sm ${tabClass}`}
            style={activeTab === tab.key ? activeStyle : {}}
            onClick={() => handleChangeTab(tab.key)}
          >
            {translation ? t(tab.trans) : tab.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
