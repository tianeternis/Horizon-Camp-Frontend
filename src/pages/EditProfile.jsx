import EditProfileForm from "@/components/account/editProfile/EditProfileForm";
import { useDynamicTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

const EditProfile = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.edit-profile"));

  const information = {
    fullname: "Nguyễn Thiên Vũ",
    birthday: "2003-01-01",
    gender: "male",
    email: "thienvu@gmail.com",
    phoneNumber: "0123456789",
    address: "Nguyễn Văn Cừ, Phường Xuân Khách, Quận Ninh Kiều, Cần Thơ",
    avatar:
      "https://i.pinimg.com/550x/e6/eb/28/e6eb285f58d7b13a0974014ba87734dc.jpg",
  };

  return (
    <div className="divide-y divide-solid divide-black/10 px-2 text-black md:px-6">
      <div className="py-4">
        <p className="text-base font-bold sm:text-lg">
          {t("account.edit-profile.title")}
        </p>
      </div>
      <div className="py-6">
        {information && <EditProfileForm profile={information} />}
      </div>
    </div>
  );
};

export default EditProfile;
