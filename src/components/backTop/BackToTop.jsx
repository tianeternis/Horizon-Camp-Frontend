import { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const BackToTop = ({}) => {
  const [visible, setVisible] = useState(false);

  // Hàm để xử lý sự kiện cuộn trang
  const checkScrollTop = () => {
    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset;

    setVisible(scrollTop > 100);
  };

  // Hàm cuộn trang về đầu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà
    });
  };

  // Sử dụng useEffect để theo dõi sự thay đổi khi cuộn trang
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [visible]);

  return (
    visible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-main text-white shadow-lg sm:h-12 sm:w-12"
      >
        <IoMdArrowRoundUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
    )
  );
};

export default BackToTop;
