import {
  Pagination as MUIPagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Pagination = ({
  page = 1,
  count = 5,
  onChange = (event, page) => {},
}) => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MUIPagination
      count={count}
      variant="outlined"
      page={page}
      onChange={(e, page) => onChange(e, page)}
      hidePrevButton={page === 1}
      hideNextButton={page === count}
      boundaryCount={1}
      siblingCount={isMobileScreen ? 0 : 1}
      sx={{
        "& .MuiButtonBase-root.MuiPaginationItem-root, & .MuiPaginationItem-ellipsis":
          {
            fontFamily: "var(--font-main)",
            minWidth: { xs: 34, sm: 42 },
            height: { xs: 34, sm: 42 },
            fontSize: { xs: "12px", sm: "14px" },
            backgroundColor: "transparent",
            color: "#494949",
          },
        "& .MuiButtonBase-root.MuiPaginationItem-root": {
          border: "1px solid #e5e5e5",
          borderRadius: "100%",

          "&:hover": {
            backgroundColor: "var(--color-main)",
            borderColor: "var(--color-main)",
            color: "#fff",
          },
        },
        "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "var(--color-main)",
          borderColor: "var(--color-main)",
          color: "#fff",
        },
        "& .MuiPaginationItem-ellipsis": {
          lineHeight: { xs: "28px", sm: "34px" },
        },
      }}
    />
  );
};

export default Pagination;
