import ControlledCheckbox from "@/components/inputs/ControlledCheckbox";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";
import Textarea from "@/components/inputs/Textarea";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchDistricts, fetchProvinces, fetchWard } from "./api";

const options = [
  { label: "Cần Thơ", value: "can-tho" },
  { label: "Đồng Tháp", value: "dong-thap" },
  { label: "Hà Nội", value: "ha-noi" },
  { label: "Hồ Chí Minh", value: "ho-chi-minh" },
  { label: "Đà Nẵng", value: "da-nang" },
  { label: "Hải Phòng", value: "hai-phong" },
  { label: "Nghệ An", value: "nghe-an" },
  { label: "Thanh Hóa", value: "thanh-hoa" },
  { label: "Lâm Đồng", value: "lam-dong" },
  { label: "Bình Dương", value: "binh-duong" },
  { label: "Bà Rịa - Vũng Tàu", value: "ba-ria-vung-tau" },
  { label: "Quảng Ninh", value: "quang-ninh" },
  { label: "Kiên Giang", value: "kien-giang" },
  { label: "Vĩnh Long", value: "vinh-long" },
  { label: "Bắc Giang", value: "bac-giang" },
  { label: "Thừa Thiên Huế", value: "thua-thien-hue" },
  { label: "Phú Yên", value: "phu-yen" },
  { label: "Bình Thuận", value: "binh-thuan" },
  { label: "Sóc Trăng", value: "soc-trang" },
  { label: "Trà Vinh", value: "tra-vinh" },
];

const AddressBookForm = ({
  id,
  register,
  errors,
  control,
  handleSubmitForm,
  watch,
  setValue,
  disableDefault = false,
}) => {
  const { t } = useTranslation();

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const province = watch("province");
  const district = watch("district");
  const ward = watch("ward");

  useEffect(() => {
    fetchProvinces(setProvinces);
  }, []);

  useEffect(() => {
    if (province) {
      fetchDistricts(province?.value, setDistricts);
    } else {
      setDistricts([]);
    }

    setWards([]);
  }, [province]);

  useEffect(() => {
    if (district) {
      fetchWard(district?.value, setWards);
    } else {
      setWards([]);
    }
  }, [district]);

  const handleChangeProvince = async (_, province) => {
    setValue("province", province);
    if (district) {
      setValue("district", null);
    }
    if (ward) {
      setValue("ward", null);
    }
  };

  const handleChangeDistrict = async (_, district) => {
    setValue("district", district);
    if (ward) {
      setValue("ward", null);
    }
  };

  const handleChangeWard = async (_, ward) => {
    setValue("ward", ward);
  };

  return (
    <form
      id={id}
      className="grid w-full grid-cols-12 gap-4 font-main"
      onSubmit={handleSubmitForm}
    >
      <div className="col-span-12 space-y-1 sm:col-span-6">
        <label className="text-13px font-medium after:text-red-500 after:content-['*'] sm:text-sm">
          {t("account.address-book.fullname")}
        </label>
        <Input
          label="fullName"
          register={register}
          errors={errors}
          className="w-full rounded border border-solid border-black/15 px-3 py-2 text-13px text-gray-900 outline-none placeholder:text-gray-500 sm:py-2.5 sm:text-sm"
        />
      </div>
      <div className="col-span-12 space-y-1 sm:col-span-6">
        <label className="text-13px font-medium after:text-red-500 after:content-['*'] sm:text-sm">
          {t("account.address-book.phone")}
        </label>
        <Input
          label="phone"
          register={register}
          errors={errors}
          className="w-full rounded border border-solid border-black/15 px-3 py-2 text-13px text-gray-900 outline-none placeholder:text-gray-500 sm:py-2.5 sm:text-sm"
        />
      </div>
      <div className="col-span-12 space-y-1">
        <label className="text-13px font-medium after:text-red-500 after:content-['*'] sm:text-sm">
          {t("account.address-book.province")}
        </label>
        <Select
          label="province"
          control={control}
          errors={errors}
          options={provinces}
          inputStyle={{
            fontSize: { xs: "13px", sm: "14px" },
            padding: { xs: "8px 12px", sm: "10px 12px" },
          }}
          onChange={handleChangeProvince}
        />
      </div>
      <div className="col-span-12 space-y-1">
        <label className="text-13px font-medium after:text-red-500 after:content-['*'] sm:text-sm">
          {t("account.address-book.district")}
        </label>
        <Select
          label="district"
          control={control}
          errors={errors}
          options={districts}
          inputStyle={{
            fontSize: { xs: "13px", sm: "14px" },
            padding: { xs: "8px 12px", sm: "10px 12px" },
          }}
          onChange={handleChangeDistrict}
        />
      </div>
      <div className="col-span-12 space-y-1">
        <label className="text-13px font-medium after:text-red-500 after:content-['*'] sm:text-sm">
          {t("account.address-book.ward")}
        </label>
        <Select
          label="ward"
          control={control}
          errors={errors}
          options={wards}
          inputStyle={{
            fontSize: { xs: "13px", sm: "14px" },
            padding: { xs: "8px 12px", sm: "10px 12px" },
          }}
          onChange={handleChangeWard}
        />
      </div>
      <div className="col-span-12 space-y-1">
        <label className="text-13px font-medium after:text-red-500 after:content-['*'] sm:text-sm">
          {t("account.address-book.details")}
        </label>
        <Textarea
          label="details"
          register={register}
          errors={errors}
          rows={2}
          className="-mb-1.5 w-full rounded border border-solid border-black/15 px-3 py-2 text-13px text-gray-900 outline-none placeholder:text-gray-500 sm:py-2.5 sm:text-sm"
        />
      </div>
      {!disableDefault && (
        <div className="col-span-12 flex items-center gap-2.5">
          <ControlledCheckbox
            id="set_as_address_default_checkbox"
            label="default"
            control={control}
            errors={errors}
          />
          <label
            htmlFor="set_as_address_default_checkbox"
            className="text-13px font-medium text-gray-600"
          >
            {t("account.address-book.set_as_default")}
          </label>
        </div>
      )}
    </form>
  );
};

export default AddressBookForm;
