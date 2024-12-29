import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  label,
  register = () => {},
  errors,
  translation = true,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          {...register(label)}
          {...props}
          style={errors?.[label] ? { border: "1px solid #ff3939" } : {}}
        />

        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-gray-400 hover:text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>

      {errors?.[label] && (
        <span className="block pt-1.5 text-xs text-red-500">
          {translation ? t(errors?.[label]?.message) : errors?.[label]?.message}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
