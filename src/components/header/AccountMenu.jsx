import { PATHS } from "@/routes";
import Avatar from "@/components/avatar/Avatar";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { TbClipboardText } from "react-icons/tb";
import { PiSignOutBold, PiMapPinLineBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/services/authService";
import StatusCodes from "@/utils/status/StatusCodes";
import { logoutSuccess } from "@/redux/reducer/userSlice";
import { toast } from "react-toastify";
import { auth, signOut } from "@/configs/firebase";

const AccountMenu = ({}) => {
  const { t } = useTranslation();

  const account = useSelector((state) => state.user.account);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout({ _id: account?._id });

    if (res && res.EC === StatusCodes.SUCCESS) {
      await signOut(auth);
      dispatch(logoutSuccess());
      navigate(PATHS.login());
    }

    if (res && res.EC === StatusCodes.ERRROR) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="group relative">
      <Link to={PATHS.account()}>
        <div className="flex items-center gap-2">
          <Avatar
            image={account?.avatar}
            name={account?.fullName}
            sx={{
              width: { xs: 28, md: 38 },
              height: { xs: 28, md: 38 },
              fontSize: { xs: 12, md: 16 },
            }}
          />
          <div className="hidden items-center gap-1 text-sm font-medium text-secondary md:flex lg:text-15px">
            <span>{account?.fullName}</span>
            <MdKeyboardArrowDown className="h-5 w-5" />
          </div>
        </div>
      </Link>
      <div className="invisible absolute -right-6 z-40 origin-bottom scale-90 pt-4 opacity-0 transition-all duration-300 will-change-transform group-hover:visible group-hover:scale-100 group-hover:opacity-100 md:right-0">
        <div className="relative min-w-36 max-w-44 rounded-sm bg-white shadow-lg before:absolute before:-top-1.5 before:right-8 before:h-3.5 before:w-3.5 before:rotate-45 before:bg-white md:max-w-52 md:before:right-14">
          <div className="flex flex-col py-2">
            <div className="flex items-center gap-2 px-3 py-2 md:py-3">
              <div className="hidden md:block">
                <Avatar
                  image={account?.avatar}
                  name={account?.fullName}
                  size={40}
                />
              </div>
              <div className="space-y-1 overflow-hidden">
                <div className="truncate text-sm font-semibold">
                  {account?.fullName}
                </div>
                <div className="truncate text-xs">{account?.email}</div>
              </div>
            </div>
            <div className="border-b border-solid border-black/15"></div>
            <Link
              to={PATHS.account()}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-black hover:text-main md:py-2.5"
            >
              <RiAccountPinCircleLine className="h-4 w-4" />
              <span>{t("navigation.profile")}</span>
            </Link>
            <Link
              to={PATHS.addressBook()}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-black hover:text-main md:py-2.5"
            >
              <PiMapPinLineBold className="h-4 w-4" />
              <span>{t("navigation.address_book")}</span>
            </Link>
            <Link
              to={PATHS.purchase()}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-black hover:text-main md:py-2.5"
            >
              <TbClipboardText className="h-4 w-4" />
              <span>{t("navigation.purchase")}</span>
            </Link>
            <button
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-black hover:text-main md:py-2.5"
              onClick={() => handleLogout()}
            >
              <PiSignOutBold className="h-4 w-4" />
              <span>{t("navigation.logout")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
