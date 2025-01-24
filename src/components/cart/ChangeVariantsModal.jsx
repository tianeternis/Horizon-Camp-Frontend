import Button from "@/components/buttons/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const ChangeVariantsModal = ({
  show = false,
  onClose = () => {},
  product = {},
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
        <DialogTitle
          sx={{
            fontFamily: "var(--font-main)",
            fontSize: { xs: "16px", sm: "18px" },
            fontWeight: 600,
            padding: "24px",
          }}
        >
          {t("cart.change-variants.title")}
        </DialogTitle>
        <DialogContent sx={{ padding: "0 24px" }}>
          {JSON.stringify(product)}
        </DialogContent>
        <DialogActions sx={{ padding: "24px" }}>
          <div className="flex justify-end gap-3 font-main">
            <Button
              onClick={handleClose}
              label={t("cart.change-variants.back")}
              buttonClass="rounded-md border border-gray-200 bg-white px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 "
            />
            <Button
              //   onClick={handleSubmitReview}
              label={t("cart.change-variants.confirm")}
              buttonClass="rounded-md bg-main px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-primary text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-main/20 sm:py-2.5 "
            />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChangeVariantsModal;
