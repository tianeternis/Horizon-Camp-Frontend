import MUIAvatar from "@mui/material/Avatar";

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

const stringAvatar = (name) => {
  // Lấy ký tự đầu tiên của mỗi từ trong chuỗi tên
  const initials = name
    .split(" ")
    .filter(Boolean) // Loại bỏ các từ rỗng (nếu có nhiều khoảng trắng)
    .map((word) => word[0])
    .join("")
    .toUpperCase(); // Chuyển thành chữ in hoa

  return initials.slice(-2);
};

const Avatar = ({
  image,
  name = "?",
  size = 32,
  fontSize = 16,
  sx = {},
  ...props
}) => {
  return (
    <MUIAvatar
      src={image || undefined}
      alt=""
      sx={{
        width: size,
        height: size,
        fontSize: fontSize,
        ...(image ? {} : { bgcolor: stringToColor(name) }),
        ...sx,
      }}
      children={image ? undefined : stringAvatar(name)}
      {...props}
    />
  );
};

export default Avatar;
