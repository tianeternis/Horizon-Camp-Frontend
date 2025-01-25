import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

import AccountLayout from "@/layouts/AccountLayout";
import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import FAQs from "@/pages/FAQs";
import PicnicGuide from "@/pages/PicnicGuide";
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
import ResetPassword from "@/pages/ResetPassword";
import ActivateAccount from "@/pages/ActivateAccount";
import Profile from "@/pages/Profile";
import AddressBook from "@/pages/AddressBook";
import Purchase from "@/pages/Purchase";
import EditProfile from "@/pages/EditProfile";
import ChangePassword from "@/pages/ChangePassword";
import DeleteAccount from "@/pages/DeleteAccount";
import OrderDetails from "@/pages/OrderDetails";

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
        path: ROUTES.PICNIC_GUIDE.index,
        element: <PicnicGuide />,
        handle: { crumb: () => crumb("title.picnic-guide") },
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
        path: ROUTES.RESET_PASSWORD.index,
        element: <ResetPassword />,
        handle: { crumb: () => crumb("title.reset-password") },
      },
      {
        path: ROUTES.ACTIVATE_ACCOUNT.index,
        element: <ActivateAccount />,
        handle: { crumb: () => crumb("title.activate-account") },
      },
      {
        path: ROUTES.ACCOUNT.index,
        element: <AccountLayout />,
        handle: { crumb: () => crumb("title.profile") },
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: ROUTES.ACCOUNT.ADDRESS_BOOK.index,
            element: <AddressBook />,
            handle: { crumb: () => crumb("title.address-book") },
          },
          {
            path: ROUTES.ACCOUNT.PURCHASE.index,
            handle: { crumb: () => crumb("title.purchase") },
            children: [
              {
                index: true,
                element: <Purchase />,
              },
              {
                path: ROUTES.ACCOUNT.PURCHASE.ORDER_DETAILS.index,
                element: <OrderDetails />,
                handle: { crumb: () => crumb("title.order-details") },
              },
            ],
          },
          {
            path: ROUTES.ACCOUNT.EDIT_PROFILE.index,
            element: <EditProfile />,
            handle: { crumb: () => crumb("title.edit-profile") },
          },
          {
            path: ROUTES.ACCOUNT.CHANGE_PASSWORD.index,
            element: <ChangePassword />,
            handle: { crumb: () => crumb("title.change-password") },
          },
          {
            path: ROUTES.ACCOUNT.DELETE_ACCOUNT.index,
            element: <DeleteAccount />,
            handle: { crumb: () => crumb("title.delete-account") },
          },
        ],
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
