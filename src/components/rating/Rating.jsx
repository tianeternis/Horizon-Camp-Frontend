import MUIRating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Rating = ({
  value = 0,
  setValue = (value) => {},
  precision = 0.1,
  readOnly = false,
  size = 32,
}) => {
  return (
    <div className="w-full">
      <MUIRating
        value={value}
        precision={precision}
        readOnly={readOnly}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        icon={<StarRoundedIcon style={{ fontSize: `${size}px` }} />}
        emptyIcon={<StarRoundedIcon style={{ fontSize: `${size}px` }} />}
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#ffe000",
          },
          "& .MuiRating-iconEmpty": {
            color: "#d1d1d1",
          },
          "& .MuiRating-iconHover": {
            color: "#ffe000",
          },
        }}
      />
    </div>
  );
};

export default Rating;
