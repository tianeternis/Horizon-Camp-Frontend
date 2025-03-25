import { PATHS } from "@/routes";
import { Modal } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { toast } from "react-toastify";

const VoiceSearch = ({ show = true, handleClose = () => {} }) => {
  const { t, i18n } = useTranslation();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (show) {
      SpeechRecognition.startListening({
        continuous: true,
        language: i18n.language === "vi" ? "vi-VN" : "en-US",
      });
    } else {
      SpeechRecognition.stopListening();
      resetTranscript();
    }
  }, [show]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!transcript || !listening) {
      return;
    }

    let timeoutId = setTimeout(() => {
      closeModal();
      navigate(PATHS.search({ keyword: transcript }));
    }, [2000]);

    return () => clearTimeout(timeoutId);
  }, [transcript]);

  const closeModal = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
    handleClose();
  };

  if (!browserSupportsSpeechRecognition) {
    toast.error(t("search.not_supported_voice"));
    return;
  }

  return (
    <div>
      <Modal open={show} onClose={closeModal}>
        <div className="absolute left-1/2 top-1/2 w-9/10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white px-6 py-8 font-main outline-none sr-500:w-7/10 sm:w-6/10 sm:px-8 md:w-5/10 lg:w-4/10 xl:w-1/3 2xl:w-3/10">
          <div className="flex items-center justify-center">
            <div className="space-y-16 py-8">
              <div className="flex w-full items-center justify-center">
                <div className="relative flex h-18 w-18 sr-500:h-22 sr-500:w-22 md:h-24 md:w-24">
                  <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-main opacity-75"></div>
                  <div className="relative inline-flex h-18 w-18 items-center justify-center rounded-full bg-main text-3xl text-white sr-500:h-22 sr-500:w-22 md:h-24 md:w-24 md:text-4xl">
                    <FaMicrophone />
                  </div>
                </div>
              </div>
              <div className="text-center text-13px sr-500:text-sm">
                {listening && (transcript ? transcript : t("search.listening"))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VoiceSearch;
