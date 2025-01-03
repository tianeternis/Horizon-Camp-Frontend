import MUIRating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Rating = ({
  value = 0,
  setValue = (value) => {},
  precision = 0.1,
  readOnly = false,
  max = 5,
  size,
  colorFilled = "#ffe000",
  colorEmpty = "#d1d1d1",
}) => {
  return (
    <div className="flex w-full items-center justify-center">
      <MUIRating
        value={value}
        precision={precision}
        readOnly={readOnly}
        max={max}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        icon={<StarRoundedIcon style={{ fontSize: "inherit" }} />}
        emptyIcon={<StarRoundedIcon style={{ fontSize: "inherit" }} />}
        sx={{
          fontSize: size || "inherit",
          "& .MuiRating-iconFilled": {
            color: colorFilled,
          },
          "& .MuiRating-iconEmpty": {
            color: colorEmpty,
          },
          "& .MuiRating-iconHover": {
            color: colorFilled,
          },
        }}
      />
    </div>
  );
};

export default Rating;
