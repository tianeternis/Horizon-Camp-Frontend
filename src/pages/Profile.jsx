import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";
import Avatar from "@/components/avatar/Avatar";
import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaUserEdit,
} from "react-icons/fa";
import { PiUserFill } from "react-icons/pi";
import { MdAttachEmail, MdPassword } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { TiUserDelete } from "react-icons/ti";
import { PATHS } from "@/routes";

const genders = {
  default: "",
  male: "Nam",
  female: "Nữ",
  other: "Khác",
};

const Profile = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.profile"));

  const information = {
    fullname: "Nguyễn Thiên Vũ",
    birthday: "01/01/2003",
    gender: "male",
    email: "thienvu@gmail.com",
    phoneNumber: "0123456789",
    address: "Nguyễn Văn Cừ, Phường Xuân Khách, Quận Ninh Kiều, Cần Thơ",
    avatar:
      "https://i.pinimg.com/550x/e6/eb/28/e6eb285f58d7b13a0974014ba87734dc.jpg",
  };

  return (
    <div className="divide-y divide-solid divide-black/10 px-2 text-black md:px-6">
      <div className="space-y-0.5 py-4">
        <p className="text-lg font-bold text-primary">
          {t("account.profile-page.title_1")}
        </p>
        <p className="text-13px">{t("account.profile-page.title_2")}</p>
      </div>
      <div className="flex flex-col-reverse gap-8 py-6 lg:grid lg:grid-cols-12 lg:gap-2 lg:divide-x lg:divide-solid lg:divide-black/10">
        <div className="space-y-8 lg:col-span-8">
          <div className="space-y-4">
            <p className="text-base font-semibold">
              {t("account.profile-page.personalInfor")}
            </p>
            <div className="space-y-4 pl-8 text-sm">
              <div className="flex items-center gap-2.5 sr-530:grid sr-530:grid-cols-12 sr-530:gap-2">
                <div className="flex items-center gap-2.5 sr-530:col-span-5 sr-530:text-gray-800">
                  <PiUserFill className="h-4 w-4" />
                  <span className="hidden sr-530:inline">
                    {t("account.profile-page.fullName")}
                  </span>
                </div>
                <span className="sr-530:col-span-7 sr-530:font-medium">
                  {information?.fullname}
                </span>
              </div>
              <div className="flex items-center gap-2.5 sr-530:grid sr-530:grid-cols-12 sr-530:gap-2">
                <div className="flex items-center gap-2.5 sr-530:col-span-5 sr-530:text-gray-800">
                  <FaBirthdayCake className="h-4 w-4" />
                  <span className="hidden sr-530:inline">
                    {t("account.profile-page.birthday")}
                  </span>
                </div>
                <span className="sr-530:col-span-7 sr-530:font-medium">
                  {information?.birthday}
                </span>
              </div>
              <div className="flex items-center gap-2.5 sr-530:grid sr-530:grid-cols-12 sr-530:gap-2">
                <div className="flex items-center gap-2.5 sr-530:col-span-5 sr-530:text-gray-800">
                  <BiMaleFemale className="h-4 w-4" />
                  <span className="hidden sr-530:inline">
                    {t("account.profile-page.gender")}
                  </span>
                </div>
                <span className="sr-530:col-span-7 sr-530:font-medium">
                  {genders?.[information?.gender]}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base font-semibold">
              {t("account.profile-page.contactInfor")}
            </p>
            <div className="space-y-4 pl-8 text-sm">
              <div className="flex items-center gap-2.5 sr-530:grid sr-530:grid-cols-12 sr-530:gap-2">
                <div className="flex items-center gap-2.5 sr-530:col-span-5 sr-530:text-gray-800">
                  <MdAttachEmail className="h-4 w-4" />
                  <span className="hidden sr-530:inline">Email</span>
                </div>
                <span className="sr-530:col-span-7 sr-530:font-medium">
                  {information?.email}
                </span>
              </div>
              <div className="flex items-center gap-2.5 sr-530:grid sr-530:grid-cols-12 sr-530:gap-2">
                <div className="flex items-center gap-2.5 sr-530:col-span-5 sr-530:text-gray-800">
                  <FaPhone className="h-4 w-4" />
                  <span className="hidden sr-530:inline">
                    {t("account.profile-page.phone")}
                  </span>
                </div>
                <span className="sr-530:col-span-7 sr-530:font-medium">
                  {information?.phoneNumber}
                </span>
              </div>
              <div className="flex items-center gap-2.5 sr-530:grid sr-530:grid-cols-12 sr-530:gap-2">
                <div className="flex items-center gap-2.5 sr-530:col-span-5 sr-530:text-gray-800">
                  <FaMapMarkerAlt className="h-4 w-4" />
                  <span className="hidden sr-530:inline">
                    {t("account.profile-page.address")}
                  </span>
                </div>
                <span className="sr-530:col-span-7 sr-530:font-medium">
                  {information?.address}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:col-span-4 lg:py-6">
          <Avatar
            sx={{
              width: { xs: 100, sm: 120, lg: 150 },
              height: { xs: 100, sm: 120, lg: 150 },
            }}
            image={information?.avatar}
            name={information.fullname}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-6 sr-530:flex-row md:hidden">
        <div className="grow rounded-md bg-orange-400 p-2 text-sm font-medium hover:bg-orange-500">
          <NavLink
            to={PATHS.editProfile()}
            className="flex w-full flex-nowrap items-center justify-center gap-2.5"
          >
            <FaUserEdit className="h-5 w-5" />
            <span>{t("account.edit_profile")}</span>
          </NavLink>
        </div>
        <div className="grow rounded-md bg-blue-500 p-2 text-sm font-medium hover:bg-blue-600">
          <NavLink
            to={PATHS.changePassword()}
            className="flex w-full flex-nowrap items-center justify-center gap-2.5"
          >
            <MdPassword className="h-5 w-5" />
            <span>{t("account.change_password")}</span>
          </NavLink>
        </div>
        <div className="grow rounded-md bg-red-500 p-2 text-sm font-medium hover:bg-red-600">
          <NavLink
            to={PATHS.deleteAccount()}
            className="flex w-full flex-nowrap items-center justify-center gap-2.5"
          >
            <TiUserDelete className="h-5 w-5" />
            <span>{t("account.delete_account")}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
