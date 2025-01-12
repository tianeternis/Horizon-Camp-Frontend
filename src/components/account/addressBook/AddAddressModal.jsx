import Button from "@/components/buttons/Button";
import { useAppForm } from "@/hooks";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { addressFormSchema } from "./addressFormSchama";
import AddressBookForm from "./AddressBookForm";

const FORM_ID = "add_new_address_form";

const AddAddressModal = ({ show = false, onClose = () => {} }) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useAppForm(addressFormSchema);

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
    reset();
  };

  const handleAddNewAddress = (data) => {
    console.log("new address", data);
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
          {t("account.address-book.new_address")}
        </DialogTitle>
        <DialogContent sx={{ padding: "0 24px" }}>
          <AddressBookForm
            id={FORM_ID}
            register={register}
            errors={errors}
            control={control}
            handleSubmitForm={handleSubmit(handleAddNewAddress)}
          />
        </DialogContent>
        <DialogActions sx={{ padding: "24px" }}>
          <div className="flex justify-end gap-3 font-main">
            <Button
              onClick={handleClose}
              label={t("account.address-book.back")}
              buttonClass="rounded-md border border-gray-200 bg-white px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 "
            />
            <Button
              form={FORM_ID}
              label={t("account.address-book.complete")}
              buttonClass="inline-flex items-center rounded-md bg-main px-3 py-2 sm:px-6 text-center text-13px sm:text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-main/30 sm:py-2.5 "
            />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddAddressModal;
