import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ROUTES } from "./routes";
import PrivateRoute from "./private/PrivateRoute";
import ChangePasswordRoute from "./private/ChangePasswordRoute";
import { CategoryLoader, ProductLoader } from "./loader";

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AccountLayout = lazy(() => import("@/layouts/AccountLayout"));

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Products = lazy(() => import("@/pages/Products"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQs = lazy(() => import("@/pages/FAQs"));
const PicnicGuide = lazy(() => import("@/pages/PicnicGuide"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Cart = lazy(() => import("@/pages/Cart"));
const Wishlist = lazy(() => import("@/pages/Wishlist"));
const OrderInstruction = lazy(() => import("@/pages/OrderInstruction"));
const DeliveryAndReceipt = lazy(() => import("@/pages/DeliveryAndReceipt"));
const WarrantyPolicy = lazy(() => import("@/pages/WarrantyPolicy"));
const ReturnPolicy = lazy(() => import("@/pages/ReturnPolicy"));
const InformationSecurity = lazy(() => import("@/pages/InformationSecurity"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
const ActivateAccount = lazy(() => import("@/pages/ActivateAccount"));
const Profile = lazy(() => import("@/pages/Profile"));
const AddressBook = lazy(() => import("@/pages/AddressBook"));
const Purchase = lazy(() => import("@/pages/Purchase"));
const EditProfile = lazy(() => import("@/pages/EditProfile"));
const ChangePassword = lazy(() => import("@/pages/ChangePassword"));
const DeleteAccount = lazy(() => import("@/pages/DeleteAccount"));
const OrderDetails = lazy(() => import("@/pages/OrderDetails"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const PaymentResult = lazy(() => import("@/pages/PaymentResult"));

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
        handle: { crumb: () => crumb("title.product") },
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ROUTES.PRODUCTS.SEARCH.index,
            element: <Products />,
            handle: {
              crumb: () => crumb("title.search_results"),
            },
          },
          {
            path: ROUTES.PRODUCTS.PRODUCTS_BY_CATEGORY.index,
            element: <Products />,
            loader: CategoryLoader,
            handle: {
              crumb: (data) => crumb(undefined, data?.crumb),
            },
          },
        ],
      },
      {
        path: ROUTES.PRODUCT_DETAIL.index,
        element: <ProductDetail />,
        loader: ProductLoader,
        handle: {
          crumb: (data) => crumb(undefined, data?.crumb || "Chi tiết sản phẩm"),
        },
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
        element: (
          <PrivateRoute>
            <AccountLayout />
          </PrivateRoute>
        ),
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
            element: (
              <ChangePasswordRoute>
                <ChangePassword />
              </ChangePasswordRoute>
            ),
            handle: { crumb: () => crumb("title.change-password") },
          },
          // {
          //   path: ROUTES.ACCOUNT.DELETE_ACCOUNT.index,
          //   element: <DeleteAccount />,
          //   handle: { crumb: () => crumb("title.delete-account") },
          // },
        ],
      },
      {
        path: ROUTES.CART.index,
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        handle: { crumb: () => crumb("title.cart") },
      },
      {
        path: ROUTES.CHECKOUT.index,
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        handle: { crumb: () => crumb("title.checkout") },
      },
      {
        path: ROUTES.PAYMENT_RESULT.index,
        element: (
          <PrivateRoute>
            <PaymentResult />
          </PrivateRoute>
        ),
        handle: { crumb: () => crumb("title.payment_result") },
      },
      // {
      //   path: ROUTES.WISHLIST.index,
      //   element: <Wishlist />,
      //   handle: { crumb: () => crumb("title.wishlist") },
      // },
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
