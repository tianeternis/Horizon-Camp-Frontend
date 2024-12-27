import { useTranslation } from "react-i18next";

const Input = ({
  label,
  register = () => {},
  errors,
  translation = true,
  defaultValue,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <input
        {...register(label)}
        {...props}
        defaultValue={defaultValue}
        style={errors?.[label] ? { border: "1px solid #ff3939" } : {}}
      />

      {errors?.[label] && (
        <span className="block pt-1.5 text-xs text-red-500">
          {translation ? t(errors?.[label]?.message) : errors?.[label]?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
