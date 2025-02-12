import successCheck from "@/assets/images/success-check.png";
import warningIcon from "@/assets/images/warning-icon.png";
import {
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { FaXmark } from "react-icons/fa6";

const NotificationModal = ({
  show = false,
  onClose = () => {},
  onSubmit = () => {},
  data = { _id: "", email: "", success: false },
}) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };

  return (
    <div>
      <Dialog
        open={show}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
      >
        <div className="relative space-y-6 px-6 py-8 font-main">
          <DialogContent sx={{ padding: 0 }}>
            <div className="w-full space-y-6">
              <h4 className="pb-2 text-center text-xl font-semibold uppercase text-black md:text-2xl">
                {t(
                  `auth.activate-account.title.${data?.success ? "success" : "inactive"}`,
                )}
              </h4>
              <div className="space-y-6">
                <div className="sm:flex sm:items-center sm:gap-4">
                  <div className="hidden w-16 sm:block">
                    <img
                      src={data?.success ? successCheck : warningIcon}
                      alt="Success..."
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                  <div className="text-sm md:text-15px">
                    {t(
                      `auth.activate-account.message.msg_1.${data?.success ? "success" : "inactive"}`,
                      {
                        email: data?.email,
                      },
                    )}
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-15px">
                  <div>{t("auth.activate-account.message.msg_2")}</div>
                  <div>
                    <Trans i18nKey="auth.activate-account.message.msg_3" />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions sx={{ padding: 0 }}>
            <div className="w-full pt-4 text-center">
              <button
                className="w-full rounded-md bg-main px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary sr-500:w-auto md:text-base"
                onClick={onSubmit}
              >
                {t("auth.activate-account.activateNow")}
              </button>
            </div>
            <button
              className="absolute right-4 top-4 text-xl text-gray-400 hover:text-main"
              onClick={handleClose}
            >
              <FaXmark />
            </button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default NotificationModal;
