import { formatAddress } from "@/utils/format/address";
import { useTranslation } from "react-i18next";
import { PiMapPinAreaBold } from "react-icons/pi";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineAddLocationAlt,
  MdOutlineEditLocation,
} from "react-icons/md";
import ContentContainerLayout from "../layout/ContentContainerLayout";
import Radio from "../components/Radio";
import { Tooltip } from "@mui/material";
import { useState } from "react";

const addresses = [
  {
    _id: 1,
    fullname: "Nguyễn Thiên Vũ",
    phone: "0123456789",
    province: "Cần Thơ",
    district: "Quận Ninh Kiều",
    ward: "Phường An Khánh",
    details: "Nguyễn Văn Cừ",
    default: true,
  },
  {
    _id: 2,
    fullname: "Nguyễn Thiên Vũ",
    phone: "0123456788",
    province: "Cần Thơ",
    district: "Quận Ninh Kiều",
    ward: "Phường An Khánh",
    details: "Nguyễn Văn Cừ",
    default: false,
  },
  {
    _id: 3,
    fullname: "Nguyễn Thiên Vũ",
    phone: "0123456777",
    province: "Cần Thơ",
    district: "Quận Ninh Kiều",
    ward: "Phường An Khánh",
    details: "Nguyễn Văn Cừ",
    default: false,
  },
];

const AddressInformation = ({}) => {
  const { t } = useTranslation();

  const [selectedAddress, setSelectedAddress] = useState(
    (() => addresses?.find((address) => address?.default === true))(),
  );

  return (
    <ContentContainerLayout
      title={t("order.checkout.address.title")}
      icon={<PiMapPinAreaBold />}
    >
      <div className="divide-y divide-dashed divide-gray-300">
        <div className="divide-y divide-solid divide-gray-200 px-6">
          {addresses?.map((address, i) => (
            <div
              key={`checkout-product-information-${i}-${address?._id}`}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center gap-2">
                <Radio
                  id={`checkout-address-option-${i}-${address?._id}`}
                  checked={selectedAddress?._id === address?._id}
                  value={address?._id}
                  onChange={() => setSelectedAddress(address)}
                />
                <label
                  htmlFor={`checkout-address-option-${i}-${address?._id}`}
                  className="flex w-full cursor-pointer items-center gap-10 text-sm"
                >
                  <div className="space-x-2 font-semibold">
                    {address?.fullname} - {address?.phone}
                  </div>
                  <div>
                    {formatAddress({
                      details: address?.details,
                      district: address?.district,
                      province: address?.province,
                      ward: address?.ward,
                    })}
                  </div>
                  {address?.default && (
                    <div className="w-fit rounded-md border border-solid border-orange-200 bg-orange-50 px-1.5 py-1 text-11px font-medium text-orange-500">
                      {t("order.checkout.address.default")}
                    </div>
                  )}
                </label>
              </div>
              <div>
                <Tooltip arrow title={t("order.checkout.address.edit")}>
                  <button className="block text-xl text-blue-600 hover:text-blue-800">
                    <MdOutlineEditLocation />
                  </button>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <button className="flex w-48 shrink-0 items-center justify-center gap-2 rounded-sm border border-solid border-gray-300 bg-gray-50 py-2 text-black hover:border-main hover:bg-main hover:text-white">
            <MdOutlineAddLocationAlt className="text-lg" />
            <span className="text-sm font-medium">
              {t("order.checkout.address.new_address")}
            </span>
          </button>
          <button className="flex items-center gap-1 hover:text-primary">
            <span className="text-13px font-medium">
              {t("navigation.see_more")}
            </span>
            <MdKeyboardDoubleArrowDown className="text-base text-main" />
          </button>
        </div>
      </div>
    </ContentContainerLayout>
  );
};

export default AddressInformation;
