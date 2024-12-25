import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import FAQs from "@/pages/FAQs";
import Blogs from "@/pages/Blogs";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Cart from "@/pages/Cart";
import Wishlist from "@/pages/Wishlist";
import OrderInstruction from "@/pages/OrderInstruction";
import DeliveryAndReceipt from "@/pages/DeliveryAndReceipt";
import WarrantyPolicy from "@/pages/WarrantyPolicy";
import MemberPolicy from "@/pages/MemberPolicy";
import InformationSecurity from "@/pages/InformationSecurity";
import NotFound from "@/pages/NotFound";

const routes = [
  {
    path: ROUTES.HOME.index,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT.index,
        element: <About />,
      },
      {
        path: ROUTES.PRODUCTS.index,
        element: <Products />,
      },
      {
        path: ROUTES.CONTACT.index,
        element: <Contact />,
      },
      {
        path: ROUTES.FAQs.index,
        element: <FAQs />,
      },
      {
        path: ROUTES.BLOGS.index,
        element: <Blogs />,
      },
      {
        path: ROUTES.LOGIN.index,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER.index,
        element: <Register />,
      },
      {
        path: ROUTES.CART.index,
        element: <Cart />,
      },
      {
        path: ROUTES.WISHLIST.index,
        element: <Wishlist />,
      },
      {
        path: ROUTES.ORDER_INSTRUCTION.index,
        element: <OrderInstruction />,
      },
      {
        path: ROUTES.DELIVER_AND_RECEIPT.index,
        element: <DeliveryAndReceipt />,
      },
      {
        path: ROUTES.WARRANTY_POLICY.index,
        element: <WarrantyPolicy />,
      },
      {
        path: ROUTES.MEMBER_POLICY.index,
        element: <MemberPolicy />,
      },
      {
        path: ROUTES.INFORMATION_SECURITY.index,
        element: <InformationSecurity />,
      },
      {
        path: ROUTES.NOTFOUND.index,
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
export { PATHS as PATHS } from "./routes";
