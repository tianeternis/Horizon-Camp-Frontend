import "@/assets/css/layout.css";
import BodyLayout from "./BodyLayout";
import Avatar from "@/components/avatar/Avatar";
import { PATHS } from "@/routes";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { TiUserDelete } from "react-icons/ti";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuMapPinHouse } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const AccountLayout = ({}) => {
  const { t } = useTranslation();

  const account = {
    avatar:
      "https://i.pinimg.com/550x/e6/eb/28/e6eb285f58d7b13a0974014ba87734dc.jpg",
    name: "Thiên Vũ",
  };

  return (
    <BodyLayout>
      <div className="account md:flex md:flex-nowrap md:gap-6">
        <div className="hidden w-44 md:block md:shrink-0 lg:w-52">
          <div className="divide-y divide-solid divide-black/10 text-sm text-black">
            <div className="flex flex-nowrap items-center gap-4 py-4">
              <Avatar size={50} image={account.avatar} name={account.name} />
              <div className="space-y-1">
                <p className="font-semibold">{account.name}</p>
                <Link
                  to={PATHS.editProfile()}
                  className="flex flex-nowrap items-center gap-2 font-medium text-gray-500"
                >
                  <AiFillEdit className="h-4 w-4" />
                  <span>{t("account.edit_profile")}</span>
                </Link>
              </div>
            </div>
            <ul className="space-y-1 py-4">
              <li className="group py-2 font-medium">
                <NavLink
                  to={PATHS.account()}
                  end
                  className="flex flex-nowrap items-center gap-4"
                >
                  <RiProfileLine className="h-5 w-5 text-rose-500" />
                  <span className="duration-300 group-hover:text-main">
                    {t("account.profile")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to={PATHS.addressBook()}
                  className="flex flex-nowrap items-center gap-4"
                >
                  <LuMapPinHouse className="h-5 w-5 text-purple-400" />
                  <span className="duration-300 group-hover:text-main">
                    {t("account.address_book")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to={PATHS.purchase()}
                  className="flex flex-nowrap items-center gap-4"
                >
                  <LiaFileInvoiceSolid className="h-5 w-5 text-cyan-400" />
                  <span className="duration-300 group-hover:text-main">
                    {t("account.purchase")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to={PATHS.editProfile()}
                  className="flex flex-nowrap items-center gap-4"
                >
                  <FaUserEdit className="h-5 w-5 text-orange-400" />
                  <span className="duration-300 group-hover:text-main">
                    {t("account.edit_profile")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to={PATHS.changePassword()}
                  className="flex flex-nowrap items-center gap-4"
                >
                  <MdPassword className="h-5 w-5 text-blue-500" />
                  <span className="duration-300 group-hover:text-main">
                    {t("account.change_password")}
                  </span>
                </NavLink>
              </li>
              <li className="group py-2 font-medium">
                <NavLink
                  to={PATHS.deleteAccount()}
                  className="flex flex-nowrap items-center gap-4"
                >
                  <TiUserDelete className="h-5 w-5 text-red-500" />
                  <span className="duration-300 group-hover:text-main">
                    {t("account.delete_account")}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden md:grow md:rounded-sm md:bg-white">
          <Outlet />
        </div>
      </div>
    </BodyLayout>
  );
};

export default AccountLayout;
