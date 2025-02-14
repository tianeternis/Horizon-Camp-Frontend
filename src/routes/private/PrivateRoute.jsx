import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PATHS } from "../index";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? children : <Navigate to={PATHS.login()} replace />;
};

export default PrivateRoute;
