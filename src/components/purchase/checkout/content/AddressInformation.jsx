import emptyData from "@/assets/images/empty-data.png";
import { formatAddress } from "@/utils/format/address";
import AddAddressModal from "@/components/address/AddAddressModal";
import UpdateAddressModal from "@/components/address/UpdateAddressModal";
import { Tooltip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { PiMapPinAreaBold } from "react-icons/pi";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineAddLocationAlt,
  MdOutlineEditLocation,
} from "react-icons/md";
import ContentContainerLayout from "../layout/ContentContainerLayout";
import Radio from "../components/Radio";
import { getAddressesByUserID } from "@/services/addressService";
import StatusCodes from "@/utils/status/StatusCodes";
import { useSelector } from "react-redux";

const LIMIT = 5;

const AddressInformation = ({
  selectedAddress,
  setSelectedAddress = (address) => {},
}) => {
  const { t } = useTranslation();

  const [addresses, setAddresses] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [isSeeAll, setIsSeeAll] = useState(false);

  const fetchAddresses = async (userID) => {
    const res = await getAddressesByUserID(userID);

    if (res && res.EC === StatusCodes.SUCCESS) {
      setAddresses(res.DT);
      setSelectedAddress(res.DT?.[0]);
    }
  };

  const user = useSelector((state) => state.user.account);

  useEffect(() => {
    if (user?._id) {
      fetchAddresses(user?._id);
    }
  }, [user?._id]);

  const newAddresses = useMemo(() => {
    if (addresses?.length > 0) {
      return isSeeAll ? addresses : addresses?.slice(0, LIMIT);
    }

    return addresses;
  }, [isSeeAll, addresses]);

  const handleOpenUpdateModal = (address) => {
    if (address) {
      setUpdateData({
        _id: address?._id,
        fullName: address?.fullName,
        phone: address?.phone,
        province: { label: address?.provinceName, value: address?.provinceID },
        district: { label: address?.districtName, value: address?.districtID },
        ward: { label: address?.wardName, value: address?.wardCode },
        details: address?.detailAddress,
        default: address?.default,
      });
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
        {newAddresses?.length > 0 ? (
          <div className="divide-y divide-solid divide-gray-200 px-4 sm:px-6">
            {newAddresses?.map((address, i) => (
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
                        {address?.fullName} - {address?.phone}
                      </div>
                      {address?.default && (
                        <div className="hidden w-fit rounded-md border border-solid border-orange-200 bg-orange-50 px-1.5 py-1 text-10px font-medium text-orange-500 sr-550:block sm:text-11px lg:hidden">
                          {t("order.checkout.address.default")}
                        </div>
                      )}
                    </div>
                    <div>
                      {formatAddress({
                        details: address?.detailAddress,
                        district: address?.districtName,
                        province: address?.provinceName,
                        ward: address?.wardName,
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
                        <div className="w-fit rounded-md border border-solid border-orange-200 bg-orange-50 px-1.5 py-1 text-10px font-medium text-orange-500 sr-550:hidden sm:text-11px lg:block">
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
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <img
              src={emptyData}
              alt=""
              loading="lazy"
              className="w-16 md:w-24"
            />
            <div className="text-13px font-medium text-gray-600 md:text-sm">
              {t("account.address-book.no_data")}
            </div>
          </div>
        )}
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
          {addresses?.length > LIMIT && (
            <button
              className="flex items-center gap-1 hover:text-primary"
              onClick={() => toggleSeeAllAddresses()}
            >
              <span className="text-xs font-medium sm:text-13px">
                {isSeeAll
                  ? t("navigation.view_less")
                  : t("navigation.view_all")}
              </span>
              <MdKeyboardDoubleArrowDown
                className={`text-base text-main duration-300 ${isSeeAll ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddAddressModal
          show={showAddModal}
          onClose={() => setShowAddModal(false)}
          refetch={fetchAddresses}
        />
      )}
      {showUpdateModal && updateData && (
        <UpdateAddressModal
          show={showUpdateModal}
          onClose={handleCloseUpdateModal}
          address={updateData}
          refetch={async () => await fetchAddresses(user?._id)}
        />
      )}
    </ContentContainerLayout>
  );
};

export default AddressInformation;
