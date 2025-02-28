import Button from "@/components/buttons/Button";
import Rating from "@/components/rating/Rating";
import { addNewReview } from "@/services/reviewService";
import StatusCodes from "@/utils/status/StatusCodes";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import _ from "lodash";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const RateModal = ({
  show = false,
  onClose = () => {},
  details = [],
  refetch = () => {},
}) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [ratings, setRatings] = useState(
    (() => {
      const rating = {};
      details.forEach((detail) => {
        rating[detail?._id] = {
          detailID: detail?._id,
          rating: 0,
          review: "",
        };
      });

      return rating;
    })(),
  );
  const [loading, setLoading] = useState(false);

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };

  const handleChangeRate = (id, rating) => {
    setRatings((prev) => {
      const newRatings = _.cloneDeep(prev);
      const ratingWithID = newRatings[id] ?? {};

      return { ...newRatings, [id]: { ...ratingWithID, rating: rating } };
    });
  };

  const handleChangeReview = (id, review) => {
    setRatings((prev) => {
      const newRatings = _.cloneDeep(prev);
      const ratingWithID = newRatings[id] ?? {};

      return { ...newRatings, [id]: { ...ratingWithID, review: review } };
    });
  };

  const checkRatings = (ratings = {}) => {
    let valid = true;
    for (let item of Object.values(ratings)) {
      if (item?.rating <= 0) {
        valid = false;
        break;
      }
    }

    return valid;
  };

  const isValid = useMemo(() => checkRatings(ratings), [ratings]);

  const user = useSelector((state) => state.user.account);

  const handleSubmitReview = async () => {
    const isValid = checkRatings(ratings);

    if (isValid && user?._id) {
      const data = Object.values(ratings);

      setLoading(true);

      const res = await addNewReview(user?._id, { reviews: data });

      if (res && res.EC === StatusCodes.SUCCESS) {
        toast.success(res.EM);
        handleClose();
        refetch();
      }

      if (res && res.EC === StatusCodes.ERRROR) {
        toast.error(res.EM);
      }

      setLoading(false);
    }
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
            {details &&
              details.length > 0 &&
              details.map((detail, i) => {
                return (
                  <div
                    key={`review-${i}-${detail?._id}`}
                    className="space-y-4 py-6"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 shrink-0">
                        <img
                          src={detail?.image}
                          loading="lazy"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-grow flex-col gap-0.5">
                        <span className="line-clamp-1 text-sm font-medium">
                          {detail?.name}
                        </span>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">
                            {(() => {
                              const variant = [];
                              if (detail?.color) variant.push(detail?.color);
                              if (detail?.size) variant.push(detail?.size);

                              return variant.join(", ");
                            })()}
                          </span>
                          <span className="text-main">x{detail?.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex grow flex-col items-center gap-4 sr-500:flex-row sr-500:gap-6">
                      <div className="shrink-0 space-y-2 text-center">
                        <div className="text-sm font-semibold">
                          {t("order-details.review.quality")}
                        </div>
                        <Rating
                          value={ratings[detail?._id].rating}
                          setValue={(value) =>
                            handleChangeRate(detail?._id, value)
                          }
                          precision={1}
                          size={26}
                        />
                      </div>
                      <div className="w-full grow">
                        <textarea
                          rows="3"
                          spellCheck={false}
                          className="block w-full rounded border border-gray-300 p-2.5 text-13px text-gray-900 outline-none focus:border-main/40 focus:ring-main/40"
                          placeholder={t(
                            "order-details.review.textarea_placeholder",
                          )}
                          onChange={(e) =>
                            handleChangeReview(detail?._id, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </DialogContent>
        <DialogActions sx={{ padding: "24px" }}>
          <div className="flex justify-end gap-3 font-main">
            <Button
              onClick={handleClose}
              label={t("order-details.review.cancel")}
              loading={loading}
              loadingIconClass="text-blue-700"
              buttonClass="rounded-md border border-gray-200 bg-white px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:py-2.5 "
            />
            {isValid && (
              <Button
                onClick={handleSubmitReview}
                label={t("order-details.review.submit_review")}
                loading={loading}
                buttonClass="rounded-md bg-main px-3 py-2 sm:px-6 text-13px sm:text-sm font-medium text-gray-900 hover:bg-primary text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-main/20 sm:py-2.5 "
              />
            )}
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RateModal;
