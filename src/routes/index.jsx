import { createBrowserRouter } from "react-router-dom";

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

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/products",
  CONTACT: "/contact",
  FAQs: "/faqs",
  BLOGS: "/blogs",
  LOGIN: "/login",
  REGISTER: "/register",
  WISHLIST: "/wishlist",
  CART: "/cart",
  ORDER_INSTRUCTION: "/order-instruction",
  DELIVER_AND_RECEIPT: "/delivery-and-receipt",
  WARRANTY_POLICY: "/warranty-policy",
  MEMBER_POLICY: "/member-policy",
  INFORMATION_SECURITY: "/information-security",
  NOTFOUND: "*",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <Products />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: ROUTES.FAQs,
        element: <FAQs />,
      },
      {
        path: ROUTES.BLOGS,
        element: <Blogs />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
      {
        path: ROUTES.CART,
        element: <Cart />,
      },
      {
        path: ROUTES.WISHLIST,
        element: <Wishlist />,
      },
      {
        path: ROUTES.ORDER_INSTRUCTION,
        element: <OrderInstruction />,
      },
      {
        path: ROUTES.DELIVER_AND_RECEIPT,
        element: <DeliveryAndReceipt />,
      },
      {
        path: ROUTES.WARRANTY_POLICY,
        element: <WarrantyPolicy />,
      },
      {
        path: ROUTES.MEMBER_POLICY,
        element: <MemberPolicy />,
      },
      {
        path: ROUTES.INFORMATION_SECURITY,
        element: <InformationSecurity />,
      },
      {
        path: ROUTES.NOTFOUND,
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
