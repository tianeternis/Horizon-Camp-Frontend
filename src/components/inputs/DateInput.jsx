import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const DateInput = ({
  label,
  control,
  errors,
  translation = true,
  maxDate = null,
  minDate = null,
  inputStyle = {
    padding: "10.8px 12px",
    fontSize: "14px",
  },
  calendarBtnSize = 18,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Controller
        name={label}
        control={control}
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              value={field.value ? dayjs(field.value, "YYYY-MM-DD") : null}
              onChange={(newValue) => field.onChange(newValue)}
              slotProps={{
                field: {
                  clearable: true,
                  format: "DD/MM/YYYY",
                },
              }}
              maxDate={dayjs(maxDate)}
              minDate={dayjs(minDate)}
              sx={{
                width: "100%",
                font: "inherit",
                background: "#fff",
                "& .MuiInputBase-root": {
                  font: "inherit",
                  "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: "1px solid rgba(0, 0, 0, 0.15)",
                    },
                  "& .MuiInputBase-input": {
                    height: "auto",
                    ...inputStyle,
                  },
                },
                "& .MuiSvgIcon-root": {
                  width: calendarBtnSize,
                  height: calendarBtnSize,
                },
              }}
              {...props}
            />
          </LocalizationProvider>
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

export default DateInput;
