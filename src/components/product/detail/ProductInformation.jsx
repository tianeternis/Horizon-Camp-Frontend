import QuantityInput from "@/components/inputs/QuantityInput";
import Rating from "@/components/rating/Rating";
import { formatCurrency } from "@/utils/format/currency";
import { formatQuantity } from "@/utils/format/quantity";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ProductImageGallery from "./images/ProductImageGallery";
import { useMemo, useState } from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/services/cartService";
import StatusCodes from "@/utils/status/StatusCodes";
import { toast } from "react-toastify";
import { PATHS } from "@/routes";
import { setCartItemsQuantity } from "@/redux/reducer/cartSlide";

const VARIANT_TYPE = {
  COLOR: "color",
  SIZE: "size",
};

const ProductInformation = ({ product = {} }) => {
  const { t } = useTranslation();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [message, setMessage] = useState("");

  const priceWithVariant = useMemo(() => {
    const colorID = selectedColor?._id;
    const sizeID = selectedSize?._id;
    const variants = product?.variants || [];

    const variant = variants.find(
      (item) => colorID === item?.color?._id && sizeID === item?.size?._id,
    );
    return variant
      ? {
          _id: variant?._id,
          price: variant?.price,
          discountedPrice: variant?.discountedPrice,
          quantity: variant?.quantity,
        }
      : null;
  }, [selectedColor, setSelectedSize]);

  const handleChangeVariant = (type, value) => {
    const setVariant = (previousValue, value) => {
      setMessage("");
      return previousValue?._id === value?._id ? null : value;
    };

    if (type === VARIANT_TYPE.COLOR) {
      setSelectedColor((prev) => setVariant(prev, value));
    }

    if (type === VARIANT_TYPE.SIZE) {
      setSelectedSize((prev) => setVariant(prev, value));
    }
  };

  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    if (user?._id && priceWithVariant?._id && quantity > 0) {
      if (isAuth) {
        const res = await addProductToCart(
          user?._id,
          priceWithVariant?._id,
          quantity,
        );

        if (res && res.EC === StatusCodes.SUCCESS) {
          toast.success(res.EM);
          if (res.DT && res.DT?.cartItemsQuantity) {
            dispatch(
              setCartItemsQuantity({ quantity: res.DT?.cartItemsQuantity }),
            );
          }
        }

        if (res && res.EC === StatusCodes.ERRROR) {
          toast.error(res.EM);
        }
      } else {
        navigate(PATHS.login());
      }
    } else {
      setMessage("cart.lack_quantity");
    }
  };

  const handleBuyNow = async () => {
    if (user?._id && priceWithVariant?._id && quantity > 0) {
      if (isAuth) {
        const res = await addProductToCart(
          user?._id,
          priceWithVariant?._id,
          quantity,
        );

        if (res && res.EC === StatusCodes.SUCCESS) {
          if (res.DT && res.DT?.cartItemsQuantity) {
            dispatch(
              setCartItemsQuantity({ quantity: res.DT?.cartItemsQuantity }),
            );
          }
          navigate(`${PATHS.checkout()}?items=${res.DT?.new?._id}`);
        }

        if (res && res.EC === StatusCodes.ERRROR) {
          toast.error(res.EM);
        }
      } else {
        navigate(PATHS.login());
      }
    } else {
      setMessage("cart.lack_quantity");
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-white p-4 md:flex-row lg:gap-6">
      <div className="shrink-0">
        <ProductImageGallery
          images={
            product?.images && product?.images?.length > 0
              ? product?.images?.map((item) => item?.image?.path)
              : []
          }
        />
      </div>
      <div className="grow space-y-8">
        <div className="space-y-2">
          <div className="text-xl font-semibold text-black sr-950:text-2xl">
            {product?.name}
          </div>
          <div className="space-y-3.5">
            <div className="flex items-center divide-x divide-solid divide-gray-300">
              <span className="flex items-center justify-center gap-2 pr-4">
                <span className="text-13px text-black sr-950:text-sm">
                  {+product?.averageRating}
                </span>
                <div className="text-15px sr-950:text-lg">
                  <div className="hidden sr-400:block">
                    <Rating readOnly value={+product?.averageRating} />
                  </div>
                  <FaStar className="text-sm text-yellow-300 sr-400:hidden" />
                </div>
              </span>
              <div className="px-4">
                <span className="text-13px text-black sr-950:text-sm">
                  {formatQuantity(product?.ratingCount)}
                </span>
                <span className="ms-1 text-11px sr-950:text-13px">
                  {t("products.detail.review")}
                </span>
              </div>
              <div className="pl-4">
                <span className="text-13px text-black sr-950:text-sm">
                  {formatQuantity(product?.soldNumber)}
                </span>
                <span className="ms-1 text-11px sr-950:text-13px">
                  {t("products.detail.sold")}
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between rounded-sm bg-app-background px-2 py-2 sr-400:px-6">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col sr-650:flex-row sr-650:items-center sr-650:gap-3 md:flex-col md:items-start md:gap-0 xl:flex-row xl:items-center xl:gap-3">
                  <span className="text-base font-semibold text-primary sr-500:text-xl sr-950:text-2xl">
                    {priceWithVariant
                      ? formatCurrency(priceWithVariant?.discountedPrice)
                      : product?.price?.multiple
                        ? `${formatCurrency(product?.price?.discountedFirstPrice)} - ${formatCurrency(product?.price?.discountedLastPrice)}`
                        : formatCurrency(product?.price?.discountedPrice)}
                  </span>
                  {product?.discount && product?.discount?.value > 0 ? (
                    <span className="text-13px text-slate-400 line-through sr-500:text-sm sr-950:text-15px">
                      {priceWithVariant
                        ? formatCurrency(priceWithVariant?.price)
                        : product?.price?.multiple
                          ? `${formatCurrency(product?.price?.firstPrice)} - ${formatCurrency(product?.price?.lastPrice)}`
                          : formatCurrency(product?.price?.price)}
                    </span>
                  ) : null}
                </div>
                {product?.discount && product?.discount?.value > 0 ? (
                  <span className="block rounded-md bg-primary px-1.5 py-1 text-10px font-medium text-white sr-500:text-11px sr-950:text-xs">
                    -{product?.discount?.value}%
                  </span>
                ) : null}
              </div>
              <div className="hidden rounded-sm p-2 shadow-[0_0_2px_rgba(0,0,0,0.3)] sr-500:block md:hidden sr-900:block sr-950:p-2.5">
                <img
                  src={product?.brand?.image}
                  alt=""
                  loading="lazy"
                  className="w-12 rounded-sm object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {product?.colors && product?.colors?.length > 0 ? (
            <div className="flex items-center gap-6">
              <span className="w-3/12 shrink-0 text-13px sr-500:w-2/12 sr-950:text-sm">
                {t("products.detail.color")}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {product?.colors?.map((color, index) => {
                  return (
                    <div
                      key={`product-detail-color-${index}-${color?._id}`}
                      className="flex items-center justify-center"
                    >
                      <Tooltip title={color?.name} arrow>
                        <button
                          className="h-5 w-5 cursor-pointer rounded-full sr-950:h-6 sr-950:w-6"
                          style={{
                            backgroundColor: color?.hex,
                            border:
                              color?.name === "Trắng"
                                ? "1px solid #e5e7eb"
                                : "none",
                          }}
                          onClick={() =>
                            handleChangeVariant(VARIANT_TYPE.COLOR, color)
                          }
                        >
                          {selectedColor?._id === color?._id && (
                            <div
                              className="flex w-full items-center justify-center"
                              style={{
                                color:
                                  color?.name === "Trắng" ? "black" : "white",
                              }}
                            >
                              <FaCheck className="h-2 w-2 sr-950:h-2.5 sr-950:w-2.5" />
                            </div>
                          )}
                        </button>
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {product?.sizes && product?.sizes?.length > 0 ? (
            <div className="flex items-center gap-6">
              <span className="w-3/12 shrink-0 text-13px sr-500:w-2/12 sr-950:text-sm">
                {t("products.detail.size")}
              </span>
              <div className="flex flex-wrap gap-2 bg-transparent text-gray-800">
                {product?.sizes?.map((size, index) => {
                  return (
                    <div key={`product-detail-size-${index}-${size?._id}`}>
                      <button
                        className={`relative w-14 cursor-pointer rounded-sm border border-solid border-gray-200 py-1 text-center text-xs hover:border-primary hover:text-primary sr-950:w-16 sr-950:py-1.5 sr-950:text-13px ${selectedSize?._id === size?._id ? "border-primary text-primary after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-b-[12px] after:border-l-[12px] after:border-solid after:border-b-primary after:border-l-transparent" : ""}`}
                        onClick={() =>
                          handleChangeVariant(VARIANT_TYPE.SIZE, size)
                        }
                      >
                        {size?.name}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          <div className="flex items-start gap-6 sr-500:items-center">
            <span className="w-3/12 shrink-0 text-13px sr-500:w-2/12 sr-950:text-sm">
              {t("products.detail.quantity")}
            </span>
            <div className="flex flex-col gap-2 sr-500:flex-row sr-500:items-center sr-500:gap-6">
              <QuantityInput
                value={quantity}
                onChange={(quantity) => setQuantity(quantity)}
                rootClass="!h-7 w-fit sr-950:!h-8"
                buttonClass="!w-7 sr-950:!w-8"
                inputClass="w-10 sr-950:w-12 text-xs sr-950:text-sm"
                disabled={product?.isOutOfStock}
              />
              {priceWithVariant && (
                <span className="text-13px text-gray-800">
                  {t("products.detail.remain_product", {
                    quantity: priceWithVariant?.quantity,
                  })}
                </span>
              )}
            </div>
          </div>
          {message && (
            <div className="w-full rounded-sm border border-solid border-red-200 bg-red-50 p-2 sm:p-4">
              <span className="text-13px text-red-500 sm:text-sm">
                {t(message)}
              </span>
            </div>
          )}
        </div>
        {product?.isOutOfStock ? (
          <div className="rounded-sm border border-solid border-yellow-200 bg-yellow-50 px-4 py-3 text-xs text-black md:py-4 md:text-13px">
            {t("products.detail.out_of_stock")}
          </div>
        ) : (
          <div className="flex w-full gap-2">
            <button
              className="grow rounded-sm border border-solid border-main bg-main p-2 text-13px font-semibold text-white hover:border-gray-400 hover:bg-transparent hover:text-black sr-530:px-4 sr-950:py-2.5 sr-950:text-sm"
              onClick={() => handleAddToCart()}
            >
              {t("products.detail.add_to_cart")}
            </button>
            <button
              className="grow rounded-sm border border-solid border-gray-400 bg-transparent p-2 text-center text-13px font-semibold text-black hover:border-main hover:bg-main hover:text-white sr-530:px-4 sr-950:py-2.5 sr-950:text-sm"
              onClick={() => handleBuyNow()}
            >
              {t("products.detail.buy_now")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInformation;
