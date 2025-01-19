import Button from "@/components/buttons/Button";
import Rating from "@/components/rating/Rating";
import { formatDateToDDMMYYYY } from "@/utils/format/date";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    _id: 1,
    productImage:
      "https://bizweb.dktcdn.net/100/440/011/products/sp16-4.jpg?v=1634894750800",
    productName:
      "Thảm dã ngoại, bạt trải picnic họa tiết caro chống thấm nước gấp gọn tiện lợi K148",
    quantity: 1,
    rating: 4,
    rateDate: new Date(),
    review: "Ok quá chời👍😊",
  },
  {
    _id: 2,
    productImage:
      "https://bizweb.dktcdn.net/100/440/011/products/sp16-4.jpg?v=1634894750800",
    productName:
      "Thảm dã ngoại, bạt trải picnic họa tiết caro chống thấm nước gấp gọn tiện lợi K148",
    quantity: 1,
    rating: 5,
    rateDate: new Date(),
    review: "Ok quá chời👍😊",
  },
];

const ReviewModal = ({ show = false, onClose = () => {} }) => {
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
          {t("order-details.review.title")}
        </DialogTitle>
        <DialogContent sx={{ padding: "0 24px" }}>
          <div className="divide-y divide-solid divide-gray-300 font-main">
            {reviews.length > 0 &&
              reviews.map((review, i) => {
                return (
                  <div
                    key={`review-see-${i}-${review?._id}`}
                    className="space-y-4 py-4"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-18 h-18 shrink-0">
                        <img
                          src={review?.productImage}
                          loading="lazy"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex grow flex-col gap-1">
                        <span className="line-clamp-2 text-sm font-medium">
                          {review?.productName}
                        </span>
                        <div className="flex items-center justify-between text-xs text-gray-600">
                          <span>Màu xám, 2XL</span>
                          <span>x{review?.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-18 space-y-1 text-center">
                        <Rating value={review?.rating} readOnly size={15} />
                        <p className="text-xs text-gray-600">
                          {formatDateToDDMMYYYY(review?.rateDate)}
                        </p>
                      </div>
                      <div className="text-sm text-gray-900">
                        {review?.review}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </DialogContent>
        <DialogActions sx={{ padding: "24px" }}>
          <div className="flex justify-end font-main">
            <Button
              onClick={handleClose}
              label={"OK"}
              buttonClass="rounded-md border border-gray-200 bg-white px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 "
            />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
