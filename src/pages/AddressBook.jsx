import { useDynamicTitle } from "@/hooks";
import { formatAddress } from "@/utils/format/address";
import { useTranslation } from "react-i18next";
import { LuMapPinPlus } from "react-icons/lu";

const addresses = [
  {
    fullname: "Nguyễn Thiên Vũ",
    phone: "0123456789",
    province: "Cần Thơ",
    district: "Quận Ninh Kiều",
    ward: "Phường An Khánh",
    details: "Nguyễn Văn Cừ",
    isDefault: true,
  },
  {
    fullname: "Nguyễn Thiên Vũ",
    phone: "0123456789",
    province: "Cần Thơ",
    district: "Quận Ninh Kiều",
    ward: "Phường An Khánh",
    details: "Nguyễn Văn Cừ",
    isDefault: false,
  },
  {
    fullname: "Nguyễn Thiên Vũ",
    phone: "0123456789",
    province: "Cần Thơ",
    district: "Quận Ninh Kiều",
    ward: "Phường An Khánh",
    details: "Nguyễn Văn Cừ",
    isDefault: false,
  },
];

const AddressBook = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.address-book"));

  return (
    <div className="divide-y divide-solid divide-black/10 px-2 text-black md:px-6">
      <div className="py-4 sr-500:flex sr-500:justify-between">
        <p className="text-base font-bold sm:text-lg">
          {t("account.address-book.title")}
        </p>
        <div className="hidden sr-500:block">
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-13px font-medium text-white hover:bg-main sm:text-sm">
            <LuMapPinPlus className="h-4 w-4" />
            <span>{t("account.address-book.add_new")}</span>
          </button>
        </div>
      </div>
      <div className="space-y-4 py-6 sm:space-y-2">
        <div className="flex w-full items-start justify-between">
          <p className="text-base font-medium sm:text-lg">
            {t("account.address-book.address")}
          </p>
          <button className="flex w-fit items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-13px font-medium text-white hover:bg-main sr-500:hidden">
            <LuMapPinPlus className="h-4 w-4" />
            <span>{t("account.address-book.add_new_mobile")}</span>
          </button>
        </div>
        <div className="divide-y divide-solid divide-black/10">
          {addresses.map((address, i) => (
            <div
              key={`account-address-${i}`}
              className="flex flex-col gap-4 py-6 sr-530:flex-row sr-530:justify-between sr-530:gap-0 sm:py-8"
            >
              <div className="space-y-2 sr-530:w-1/2">
                <div className="divide-x divide-solid divide-black/50">
                  <span className="pr-2 text-sm font-semibold">
                    {address.fullname}
                  </span>
                  <span className="pl-2 text-13px font-medium text-slate-600">
                    {address.phone}
                  </span>
                </div>
                <div className="text-13px font-medium text-slate-600">
                  {formatAddress({
                    details: address.details,
                    ward: address.ward,
                    district: address.district,
                    province: address.province,
                  })}
                </div>
                {address.isDefault && (
                  <div className="w-fit rounded-md border border-solid border-orange-200 bg-orange-50 px-1.5 py-1 text-xs font-medium text-orange-400">
                    {t("account.address-book.default")}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between sr-530:w-1/2 sr-530:flex-col sr-530:items-end sr-530:justify-center sr-530:gap-3">
                <div className="flex items-center gap-4 text-13px">
                  <button className="text-blue-600 hover:text-blue-700">
                    {t("account.address-book.update")}
                  </button>
                  {!address.isDefault && (
                    <button className="text-red-500 hover:text-red-600">
                      {t("account.address-book.delete")}
                    </button>
                  )}
                </div>
                <button
                  disabled={address.isDefault}
                  className="w-fit rounded-sm border border-solid border-gray-400 bg-white/30 px-2 py-1 text-center text-xs hover:bg-white disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-white/30 sm:px-4 sm:py-1.5"
                >
                  {t("account.address-book.set_default")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
