import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { PATHS } from "@/routes";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQs = ({}) => {
  const { t } = useTranslation();

  useDynamicTitle(t("title.faqs"));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <BodyLayout>
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h4 className="relative pb-2 text-3xl font-semibold before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-52 before:-translate-x-1/2 before:bg-main">
              {t("faqs.title")}
            </h4>
            <p className="text-15px text-gray-800">
              {t("faqs.sub_title")}{" "}
              <Link
                to={PATHS.contact()}
                className="font-medium uppercase hover:text-main"
              >
                {t("faqs.contact")}
              </Link>
            </p>
          </div>
          <div className="w-full">
            <div
              className="flex w-full cursor-pointer flex-nowrap items-center rounded-md border border-solid border-[#badbcc] bg-[#d1e7dd] px-8 py-5 text-base font-semibold"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="grow">Câu hỏi</div>
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
                <div className="w-full rounded-md border border-solid border-main/10 bg-main/5 px-8 py-5 text-[15px]">
                  Câu trả lời
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
};

export default FAQs;
