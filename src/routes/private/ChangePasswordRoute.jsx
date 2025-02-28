import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.account);

  return !user?.isGoogleAuth ? children : <Navigate to="/not-found" replace />;
};

export default PrivateRoute;
