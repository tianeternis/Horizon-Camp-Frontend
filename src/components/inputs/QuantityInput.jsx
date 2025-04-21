import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const IS_VALID_QUANTITY = /^([1-9]\d*)$/;

const QuantityInput = ({
  rootClass = "",
  buttonClass = "",
  inputClass = "",
  iconClass = "",
  value = 1,
  max = 50,
  disabled = false,
  onChange = (quantity, setQuantity) => {}, // Thay đổi do click vào nút tăng/giảm hoặc gõ trực tiếp vào input
  onInputBlur = (quantity, setQuantity) => {}, // Khi blur ra khỏi input
  onButtonClick = (quantity, setQuantity) => {}, // // Khi click vào nút tăng/giảm
  ...inputProps
}) => {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => {
    onChange(quantity, setQuantity);
  }, [quantity]);

  useEffect(() => {
    handleChangeInput(value);
  }, [value]);

  const handleChangeInput = (value) => {
    if (value === "") {
      setQuantity(value);
    } else if (IS_VALID_QUANTITY.test(value)) {
      setQuantity(+value);
    }
  };

  const increaseQuantity = () => {
    if (+quantity < max) {
      setQuantity(+quantity + 1);
      onButtonClick(+quantity + 1, setQuantity);
    }
  };

  const decreaseQuantity = () => {
    if (+quantity > 1) {
      setQuantity(+quantity - 1);
      onButtonClick(+quantity - 1, setQuantity);
    }
  };

  const handleBlur = (value) => {
    const newQuantity = !IS_VALID_QUANTITY.test(value)
      ? 1
      : +value > max
        ? max
        : +value;

    setQuantity(newQuantity);
    onInputBlur(newQuantity, setQuantity);
  };

  return (
    <div
      className={`flex h-8 flex-nowrap rounded-sm border border-solid border-gray-300 bg-transparent ${rootClass}`}
      style={disabled ? { opacity: 0.6 } : {}}
    >
      <button
        className={`flex w-8 shrink-0 items-center justify-center bg-transparent text-main duration-150 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-main ${buttonClass}`}
        disabled={disabled}
        onClick={() => decreaseQuantity()}
      >
        <FaMinus className={`h-3 w-3 ${iconClass}`} />
      </button>
      <input
        value={quantity}
        onChange={(e) => handleChangeInput(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value)}
        className={`w-12 border-x border-gray-300 bg-transparent text-center text-sm text-black outline-none disabled:cursor-not-allowed ${inputClass}`}
        disabled={disabled}
        {...inputProps}
      />
      <button
        className={`flex w-8 shrink-0 items-center justify-center bg-transparent text-main duration-150 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-main ${buttonClass}`}
        disabled={disabled}
        onClick={() => increaseQuantity()}
      >
        <FaPlus className={`h-3 w-3 ${iconClass}`} />
      </button>
    </div>
  );
};

export default QuantityInput;
