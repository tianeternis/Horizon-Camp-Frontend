import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "@/redux/reducer/notifySlide";
import { Modal } from "@mui/material";
import { HiOutlineInformationCircle } from "react-icons/hi2";

const NotifyModal = ({}) => {
  const notify = useSelector((state) => state.notify);
  const dispath = useDispatch();

  const handleClose = () => {
    dispath(hideNotification());
  };

  return (
    <div>
      <Modal open={notify?.show || false} onClose={handleClose}>
        <div className="absolute left-1/2 top-1/2 w-9/10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white px-6 py-6 font-main outline-none sr-500:w-7/10 sm:w-6/10 sm:px-8 md:w-5/10 lg:w-4/10 xl:w-1/3 2xl:w-3/10">
          <div className="mb-4 flex items-center justify-center text-gray-300 sm:mb-6">
            <HiOutlineInformationCircle className="text-4xl sm:text-6xl" />
          </div>
          <h3 className="mb-6 text-center text-13px font-normal text-black sm:mb-8 sm:text-sm xl:px-4">
            {notify?.message}
          </h3>
          <div className="flex justify-center">
            <button
              className="rounded-md bg-main px-8 py-1.5 text-13px text-white outline-none hover:bg-primary sm:py-2 sm:text-sm"
              onClick={handleClose}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NotifyModal;
