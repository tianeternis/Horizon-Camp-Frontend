import {
  FormControlLabel,
  //   Radio as RadioMUI,
  RadioGroup as RadioGroupMUI,
} from "@mui/material";
import Radio from "./Radio";

const RadioGroup = ({
  value,
  setValue = (value) => {},
  options = [],
  id = "",
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroupMUI value={value} onChange={handleChange} className="!space-y-4">
      {options?.map((item, i) => (
        <FormControlLabel
          key={`${id}-option-${item?._id}-${i}`}
          value={item?._id}
          control={<Radio value={item?._id} />}
          label={item?.label}
          sx={{
            font: "inherit",
            margin: 0,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            "& .MuiTypography-root": {
              font: "inherit",
            },
          }}
        />
      ))}
    </RadioGroupMUI>
  );
};

export default RadioGroup;
