import { auth, google, signIn, signOut } from "@/configs/firebase";
import { loginSuccess } from "@/redux/reducer/userSlice";
import { PATHS } from "@/routes";
import StatusCodes from "@/utils/status/StatusCodes";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import NotificationModal from "./NotificationModal";
import { loginWithGoogle } from "@/services/authService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialAuth = () => {
  const { t } = useTranslation();

  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    try {
      const firebaseRes = await signIn(auth, new google());
      const { email, displayName } = firebaseRes.user;

      const apiRes = await loginWithGoogle({ fullName: displayName, email });

      if (apiRes && apiRes.EC === StatusCodes.SUCCESS) {
        toast.success(apiRes.EM);
        dispatch(loginSuccess(apiRes.DT));
        navigate(PATHS.home(), { replace: true });
      }

      if (apiRes && apiRes.EC === StatusCodes.INACTIVE_ACCOUNT) {
        handleOpenNotification(apiRes.DT._id, apiRes.DT.email, false);
      }

      if (apiRes && apiRes.EC === StatusCodes.ERRROR) {
        toast.error(apiRes.EM);
        await signOut(auth);
      }
    } catch (error) {
      console.log("Sign in with google error: ", error);
      toast.error(t("auth.login_with_google_error"));
    }
  };

  const handleOpenNotification = (_id, email, success) => {
    setData({ _id, email, success });
    setShowNotificationModal(true);
  };

  const handleCloseNotification = () => {
    setData(null);
    setShowNotificationModal(false);
  };

  return (
    <div>
      <div className="w-full py-6 sm:pt-0">
        <div className="mb-4 flex items-center gap-6 px-3 text-center text-13px text-gray-600 sm:px-0 sm:text-sm">
          <div className="w-full border-t border-solid border-black/10"></div>
          <span className="shrink-0 grow">{t("auth.or")}</span>
          <div className="w-full border-t border-solid border-black/10"></div>
        </div>
        <div className="w-full px-3">
          <button
            className="mx-auto flex w-full flex-nowrap items-center justify-center gap-2.5 rounded-sm border border-solid border-gray-100 bg-transparent px-8 py-2.5 text-gray-800 hover:bg-gray-50 sm:w-6/10"
            onClick={handleLoginWithGoogle}
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium">
              {t("auth.login_with_google")}
            </span>
          </button>
        </div>
      </div>
      {showNotificationModal && (
        <NotificationModal
          show={showNotificationModal}
          onClose={handleCloseNotification}
          data={data}
        />
      )}
    </div>
  );
};

export default SocialAuth;
