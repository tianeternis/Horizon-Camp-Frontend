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
import ReturnPolicy from "@/pages/ReturnPolicy";
import InformationSecurity from "@/pages/InformationSecurity";
import NotFound from "@/pages/NotFound";

const crumb = (trans, data) => {
  return { trans, data };
};

const routes = [
  {
    path: ROUTES.HOME.index,
    element: <MainLayout />,
    handle: { crumb: () => crumb("title.home") },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT.index,
        element: <About />,
        handle: { crumb: () => crumb("title.about") },
      },
      {
        path: ROUTES.PRODUCTS.index,
        element: <Products />,
        handle: { crumb: () => crumb("title.product") },
      },
      {
        path: ROUTES.CONTACT.index,
        element: <Contact />,
        handle: { crumb: () => crumb("title.contact") },
      },
      {
        path: ROUTES.FAQs.index,
        element: <FAQs />,
        handle: { crumb: () => crumb("title.faqs") },
      },
      {
        path: ROUTES.BLOGS.index,
        element: <Blogs />,
        handle: { crumb: () => crumb("title.picnic-blog") },
      },
      {
        path: ROUTES.LOGIN.index,
        element: <Login />,
        handle: { crumb: () => crumb("title.login") },
      },
      {
        path: ROUTES.REGISTER.index,
        element: <Register />,
        handle: { crumb: () => crumb("title.register") },
      },
      {
        path: ROUTES.CART.index,
        element: <Cart />,
        handle: { crumb: () => crumb("title.cart") },
      },
      {
        path: ROUTES.WISHLIST.index,
        element: <Wishlist />,
        handle: { crumb: () => crumb("title.wishlist") },
      },
      {
        path: ROUTES.ORDER_INSTRUCTION.index,
        element: <OrderInstruction />,
        handle: { crumb: () => crumb("title.order-instruction") },
      },
      {
        path: ROUTES.DELIVER_AND_RECEIPT.index,
        element: <DeliveryAndReceipt />,
        handle: { crumb: () => crumb("title.delivery-and-receipt") },
      },
      {
        path: ROUTES.WARRANTY_POLICY.index,
        element: <WarrantyPolicy />,
        handle: { crumb: () => crumb("title.warranty-policy") },
      },
      {
        path: ROUTES.RETURN_POLICY.index,
        element: <ReturnPolicy />,
        handle: { crumb: () => crumb("title.return-policy") },
      },
      {
        path: ROUTES.INFORMATION_SECURITY.index,
        element: <InformationSecurity />,
        handle: { crumb: () => crumb("title.information-security") },
      },
      {
        path: ROUTES.NOTFOUND.index,
        element: <NotFound />,
        handle: { crumb: () => crumb("title.notfound") },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
export { PATHS as PATHS } from "./routes";
