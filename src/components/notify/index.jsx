import {
  hideNotification,
  showNotification,
} from "@/redux/reducer/notifySlide";
import { store } from "@/redux/store";

export const notify = {
  show: (message) => {
    store.dispatch(showNotification({ message }));
  },
  hide: () => {
    store.dispatch(hideNotification());
  },
};
