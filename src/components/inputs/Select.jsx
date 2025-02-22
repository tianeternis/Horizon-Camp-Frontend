import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

// Cấu trúc của options
// [
//     { label: "Autocomplete", value: "auto-complete" },
//     ...
// ]

const Select = ({
  label,
  control,
  errors,
  translation = true,
  inputStyle = {
    padding: "10px 12px",
    fontSize: "14px",
  },
  listStyle = {},
  listBoxStyle = {},
  options = [],
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Controller
        name={label}
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={options}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            getOptionKey={(option) => option?.value}
            getOptionLabel={(option) => option.label || ""}
            value={field.value || null}
            onChange={(_, value) => field.onChange(value)}
            renderInput={(param) => <TextField {...param} />}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0, 0, 0, 0.15)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                  borderRadius: "4px",
                  ...listBoxStyle,
                },
              },
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 4],
                    },
                  },
                ],
              },
              listbox: {
                sx: {
                  maxHeight: 250,
                  fontFamily: "var(--font-main)",
                  fontSize: "14px",
                  ...listStyle,
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                font: "inherit",
                paddingLeft: 0,
                paddingY: 0,
                "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                  },
                "& .MuiInputBase-input": {
                  height: "auto",
                  ...inputStyle,
                },
              },
            }}
            {...props}
          />
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

export default Select;
