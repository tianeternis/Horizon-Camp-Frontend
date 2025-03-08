import { Badge as BadgeMui } from "@mui/material";

const Badge = ({ content = 0, max = 99, children }) => {
  return (
    <BadgeMui
      badgeContent={content}
      max={max}
      showZero={false}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: "var(--color-main)",
          fontFamily: "var(--font-main)",
          fontSize: 11,
          color: "white",
        },
      }}
    >
      {children}
    </BadgeMui>
  );
};

export default Badge;
