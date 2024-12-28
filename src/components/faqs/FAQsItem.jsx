import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQsItem = ({ question = "", answer = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className="flex w-full cursor-pointer flex-nowrap items-center gap-2 rounded-md border border-solid border-[#badbcc] bg-[#d1e7dd] p-4 md:px-8 md:py-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="grow text-15px font-semibold md:text-base">
          {question}
        </div>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown className="h-5 w-5" />
        </span>
      </div>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit="hidden"
          variants={{
            hidden: {
              opacity: 0,
              height: 0,
              visibility: "hidden",
              marginTop: "0",
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              },
            },
            visible: {
              opacity: 1,
              height: "auto",
              visibility: "visible",
              marginTop: "8px",
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              },
            },
          }}
          className="w-full overflow-hidden will-change-auto"
        >
          <div className="w-full rounded-md border border-solid border-main/10 bg-main/5 p-4 text-13px md:px-8 md:py-5 md:text-sm">
            {answer}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FAQsItem;
