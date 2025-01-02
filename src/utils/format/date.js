export const formatDateToDDMMYYYY = (date) => {
  if (!date) return "";

  const formatter = new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formatter.format(new Date(date));
};
