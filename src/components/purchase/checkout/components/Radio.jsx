import { FormControlLabel, Radio as RadioMUI, RadioGroup } from "@mui/material";

const Radio = ({ ...props }) => {
  return (
    <RadioMUI
      sx={{
        padding: 0,
        "& .MuiSvgIcon-root": {
          fontSize: 20,
        },
        "&.Mui-checked": {
          color: "var(--color-main)",
        },
      }}
      {...props}
    />
  );
};

export default Radio;
