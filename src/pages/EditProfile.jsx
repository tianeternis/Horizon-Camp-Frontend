import EditProfileForm from "@/components/account/editProfile/EditProfileForm";
import { useDynamicTitle } from "@/hooks";
import { getUser } from "@/services/userService";
import StatusCodes from "@/utils/status/StatusCodes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const EditProfile = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.edit-profile"));

  const [account, setAccount] = useState(null);

  const user = useSelector((state) => state.user.account);

  useEffect(() => {
    if (user?._id) {
      const fetchUser = async () => {
        const res = await getUser(user?._id);

        if (res && res.EC === StatusCodes.SUCCESS) {
          setAccount(res.DT);
        }
      };

      fetchUser();
    }
  }, []);

  return (
    <div className="divide-y divide-solid divide-black/10 px-2 text-black md:px-6">
      <div className="py-4">
        <p className="text-base font-bold sm:text-lg">
          {t("account.edit-profile.title")}
        </p>
      </div>
      <div className="py-6">
        {account && <EditProfileForm profile={account} />}
      </div>
    </div>
  );
};

export default EditProfile;
