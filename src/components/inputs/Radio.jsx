import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import RadioMUI from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Radio = ({
  label,
  control,
  errors,
  translation = true,
  options = [],
  row = true,
  size = 20,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Controller
        name={label}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} row={row} {...props}>
            {options.map((option, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={option?.value}
                  control={
                    <RadioMUI
                      sx={{
                        padding: "0 9px",
                        "& .MuiSvgIcon-root": {
                          fontSize: size,
                        },
                        "&.Mui-checked": {
                          color: "var(--color-main)",
                        },
                      }}
                    />
                  }
                  label={translation ? t(option?.label) : option?.label}
                  labelPlacement="end"
                  sx={{
                    font: "inherit",
                    "& .MuiTypography-root": {
                      font: "inherit",
                    },
                  }}
                />
              );
            })}
          </RadioGroup>
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

export default Radio;
