import { formatAddress } from "@/utils/format/address";
import AddAddressModal from "@/components/address/AddAddressModal";
import UpdateAddressModal from "@/components/address/UpdateAddressModal";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PiMapPinAreaBold } from "react-icons/pi";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineAddLocationAlt,
  MdOutlineEditLocation,
} from "react-icons/md";
import ContentContainerLayout from "../layout/ContentContainerLayout";
import Radio from "../components/Radio";

const ADDRESSES = [
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

  const [addresses, setAddresses] = useState(ADDRESSES);
  const [selectedAddress, setSelectedAddress] = useState(
    (() => addresses?.find((address) => address?.default === true))(),
  );
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [isSeeAll, setIsSeeAll] = useState(false);

  useEffect(() => {
    setAddresses(isSeeAll ? [...ADDRESSES, ...ADDRESSES] : ADDRESSES);
  }, [isSeeAll]);

  const handleOpenUpdateModal = (address) => {
    if (address) {
      console.log("update address: ", address);
      setUpdateData(address);
      setShowUpdateModal(true);
    }
  };

  const handleCloseUpdateModal = () => {
    setUpdateData(null);
    setShowUpdateModal(false);
  };

  const toggleSeeAllAddresses = () => {
    setIsSeeAll((prev) => !prev);
  };

  return (
    <ContentContainerLayout
      title={t("order.checkout.address.title")}
      icon={<PiMapPinAreaBold />}
    >
      <div className="divide-y divide-dashed divide-gray-300">
        <div className="divide-y divide-solid divide-gray-200 px-4 sm:px-6">
          {addresses?.map((address, i) => (
            <div
              key={`checkout-product-information-${i}-${address?._id}`}
              className="flex items-center justify-between py-4"
            >
              <div className="flex w-full items-start gap-2 lg:items-center">
                <Radio
                  id={`checkout-address-option-${i}-${address?._id}`}
                  checked={selectedAddress?._id === address?._id}
                  value={address?._id}
                  onChange={() => setSelectedAddress(address)}
                  className={`${address?.default ? "max-lg:!pt-0.5" : ""}`}
                />
                <label
                  htmlFor={`checkout-address-option-${i}-${address?._id}`}
                  className="flex w-full cursor-pointer flex-col gap-2.5 text-13px sm:text-sm lg:flex-row lg:items-center lg:gap-10"
                >
                  <div className="flex items-center gap-6 lg:block">
                    <div className="space-x-2 font-semibold">
                      {address?.fullname} - {address?.phone}
                    </div>
                    {address?.default && (
                      <div className="text-10px hidden w-fit rounded-md border border-solid border-orange-200 bg-orange-50 px-1.5 py-1 font-medium text-orange-500 sr-550:block sm:text-11px lg:hidden">
                        {t("order.checkout.address.default")}
                      </div>
                    )}
                  </div>
                  <div>
                    {formatAddress({
                      details: address?.details,
                      district: address?.district,
                      province: address?.province,
                      ward: address?.ward,
                    })}
                  </div>
                  <div className="flex items-center justify-between sr-550:hidden lg:block">
                    <div className="sr-550:hidden">
                      <button
                        className="block text-xs text-blue-600 hover:text-blue-800"
                        onClick={() => handleOpenUpdateModal(address)}
                      >
                        {t("order.checkout.address.edit")}
                      </button>
                    </div>
                    {address?.default && (
                      <div className="text-10px w-fit rounded-md border border-solid border-orange-200 bg-orange-50 px-1.5 py-1 font-medium text-orange-500 sr-550:hidden sm:text-11px lg:block">
                        {t("order.checkout.address.default")}
                      </div>
                    )}
                  </div>
                </label>
              </div>
              <div className="hidden sr-550:block">
                <Tooltip arrow title={t("order.checkout.address.edit")}>
                  <button
                    className="block text-xl text-blue-600 hover:text-blue-800"
                    onClick={() => handleOpenUpdateModal(address)}
                  >
                    <MdOutlineEditLocation />
                  </button>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-4 sm:px-6">
          <button
            className="flex w-fit shrink-0 items-center justify-center gap-2 rounded-sm border border-solid border-gray-300 bg-gray-50 px-4 py-1.5 text-black hover:border-main hover:bg-main hover:text-white sm:w-48 sm:py-2"
            onClick={() => setShowAddModal(true)}
          >
            <MdOutlineAddLocationAlt className="text-base sm:text-lg" />
            <span className="text-13px font-medium sm:text-sm">
              {t("order.checkout.address.new_address")}
            </span>
          </button>
          <button
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => toggleSeeAllAddresses()}
          >
            <span className="text-xs font-medium sm:text-13px">
              {isSeeAll ? t("navigation.view_less") : t("navigation.view_all")}
            </span>
            <MdKeyboardDoubleArrowDown
              className={`text-base text-main duration-300 ${isSeeAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
      <AddAddressModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
      <UpdateAddressModal
        show={showUpdateModal}
        onClose={handleCloseUpdateModal}
        // address={updateData}
      />
    </ContentContainerLayout>
  );
};

export default AddressInformation;
