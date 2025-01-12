import Button from "@/components/buttons/Button";
import Checkbox from "@/components/inputs/Checkbox";
import Input from "@/components/inputs/Input";
import Textarea from "@/components/inputs/Textarea";
import { Modal } from "@mui/material";
import { useTranslation } from "react-i18next";

const AddAddressModal = ({ show = false, onClose = () => {} }) => {
  const { t } = useTranslation();

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };

  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <div className="absolute left-1/2 top-1/2 w-2/5 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md bg-white px-6 py-6 font-main outline-none">
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-black">
              {t("account.address-book.new_address")}
            </h4>
            <form
              id="add_new_address"
              className="grid w-full grid-cols-12 gap-4"
              // onSubmit={handleSubmit(handleRegister)}
            >
              <div className="col-span-6 space-y-1">
                <label className="text-sm font-medium after:text-red-500 after:content-['*']">
                  {t("account.address-book.fullname")}
                </label>
                <Input
                  label="fullname"
                  //   register={register}
                  //   errors={errors}
                  className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />
              </div>
              <div className="col-span-6 space-y-1">
                <label className="text-sm font-medium after:text-red-500 after:content-['*']">
                  {t("account.address-book.phone")}
                </label>
                <Input
                  label="phone"
                  //   register={register}
                  //   errors={errors}
                  className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />
              </div>
              <div className="col-span-12 space-y-1">
                <label className="text-sm font-medium after:text-red-500 after:content-['*']">
                  {t("account.address-book.province")}
                </label>
                <Input
                  label="province"
                  //   register={register}
                  //   errors={errors}
                  className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />
              </div>
              <div className="col-span-12 space-y-1">
                <label className="text-sm font-medium after:text-red-500 after:content-['*']">
                  {t("account.address-book.district")}
                </label>
                <Input
                  label="district"
                  //   register={register}
                  //   errors={errors}
                  className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />
              </div>
              <div className="col-span-12 space-y-1">
                <label className="text-sm font-medium after:text-red-500 after:content-['*']">
                  {t("account.address-book.ward")}
                </label>
                <Input
                  label="ward"
                  //   register={register}
                  //   errors={errors}
                  className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />
              </div>
              <div className="col-span-12 space-y-1">
                <label className="text-sm font-medium after:text-red-500 after:content-['*']">
                  {t("account.address-book.details")}
                </label>
                <Textarea
                  label="details"
                  //   register={register}
                  //   errors={errors}
                  rows={2}
                  className="w-full rounded border border-solid border-black/15 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />
              </div>
              <div className="col-span-12 flex items-center gap-2.5">
                <Checkbox id="set_as_address_default_checkbox" />
                <label
                  htmlFor="set_as_address_default_checkbox"
                  className="text-13px font-medium text-gray-600"
                >
                  {t("account.address-book.set_as_default")}
                </label>
              </div>
            </form>
            <div className="flex justify-end gap-3">
              <Button
                onClick={handleClose}
                label={t("account.address-book.back")}
                buttonClass="rounded-md border border-gray-200 bg-white px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 "
              />
              <Button
                id="add_new_address"
                label={t("account.address-book.complete")}
                buttonClass="inline-flex items-center rounded-md bg-main px-3 py-2 sm:px-6 text-center text-13px sm:text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-main/30 sm:py-2.5 "
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddAddressModal;
