import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";

const ControlledCheckbox = ({
  label,
  control,
  errors,
  translation = true,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Controller
        name={label}
        control={control}
        render={({ field }) => (
          <div className="grid items-center justify-center">
            <input
              type="checkbox"
              checked={field.value || false}
              onChange={(e) => field.onChange(e.target.checked)}
              className="peer col-start-1 row-start-1 h-4 w-4 appearance-none rounded border border-slate-400 ring-transparent checked:border-main checked:bg-main forced-colors:appearance-auto"
              {...props}
            />
            <BsCheck className="pointer-events-none invisible col-start-1 row-start-1 stroke-white text-white peer-checked:visible forced-colors:hidden" />
          </div>
        )}
      />
      {errors?.[label] && (
        <span className="block pt-1.5 text-xs text-red-500">
          {translation ? t(errors?.[label]?.message) : errors?.[label]?.message}
        </span>
      )}
    </div>
  );
};

export default ControlledCheckbox;
