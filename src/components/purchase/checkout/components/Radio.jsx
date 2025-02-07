import CustomThemeProvider from "@/utils/mui/CustomThemeProvider";
import { Radio as RadioMUI } from "@mui/material";

const Radio = ({ ...props }) => {
  return (
    <CustomThemeProvider>
      <RadioMUI
        sx={{
          padding: 0,
          "& .MuiSvgIcon-root": {
            fontSize: { xs: 16, sm: 20 },
          },
          "&.Mui-checked": {
            color: "var(--color-main)",
          },
        }}
        {...props}
      />
    </CustomThemeProvider>
  );
};

export default Radio;
