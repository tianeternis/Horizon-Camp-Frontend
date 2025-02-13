import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Bounce, ToastContainer } from "react-toastify";
import "@/configs/i18n";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </StrictMode>,
);
