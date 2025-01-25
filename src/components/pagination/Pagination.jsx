import { Pagination as MUIPagination } from "@mui/material";
import { useState } from "react";

const Pagination = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <MUIPagination
      count={10}
      variant="outlined"
      page={currentPage}
      onChange={(_, page) => setCurrentPage(page)}
      hidePrevButton={currentPage === 1}
      hideNextButton={currentPage === 10}
      sx={{
        "& .MuiButtonBase-root.MuiPaginationItem-root, & .MuiPaginationItem-ellipsis":
          {
            fontFamily: "var(--font-main)",
            minWidth: { xs: 32, sm: 42 },
            height: { xs: 32, sm: 42 },
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
          lineHeight: { xs: "24px", sm: "34px" },
        },
      }}
    />
  );
};

export default Pagination;
