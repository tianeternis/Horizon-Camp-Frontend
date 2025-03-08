import {
  fetchCartItemsQuantity,
  setCartItemsQuantity,
} from "@/redux/reducer/cartSlide";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useInitializeApp = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.isAuth && user?.account && user?.account?._id) {
      dispatch(fetchCartItemsQuantity(user?.account?._id));
    } else {
      dispatch(setCartItemsQuantity({ quantity: 0 }));
    }
  }, [user, dispatch]);
};

export default useInitializeApp;
