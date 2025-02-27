const getPath = (path) => (params) =>
  path.replace(/:([a-zA-Z0-9_-]+)/g, (match, paramName) => {
    // Kiểm tra nếu params có giá trị cho tham số động
    if (paramName in params) {
      return params[paramName]; // Thay thế tham số bằng giá trị trong params
    }
    return match; // Nếu không có tham số trong params, giữ nguyên
  });

export const ROUTES = {
  HOME: { index: "" },
  ABOUT: { index: "about" },
  PRODUCTS: {
    index: "products",
    PRODUCTS_BY_CATEGORY: {
      index: ":category-slug",
    },
  },
  PRODUCT_DETAIL: {
    index: "product-detail/:product-slug",
  },
  ACCOUNT: {
    index: "account",
    ADDRESS_BOOK: {
      index: "address-book",
    },
    PURCHASE: {
      index: "purchase",
      ORDER_DETAILS: {
        index: "order/:id",
      },
    },
    EDIT_PROFILE: {
      index: "edit-profile",
    },
    CHANGE_PASSWORD: {
      index: "change-password",
    },
    DELETE_ACCOUNT: {
      index: "delete-account",
    },
  },
  CONTACT: { index: "contact" },
  FAQs: { index: "faqs" },
  PICNIC_GUIDE: { index: "picnic-guide" },
  LOGIN: { index: "login" },
  REGISTER: { index: "register" },
  WISHLIST: { index: "wishlist" },
  CART: { index: "cart" },
  ORDER_INSTRUCTION: { index: "order-instruction" },
  DELIVER_AND_RECEIPT: { index: "delivery-and-receipt" },
  WARRANTY_POLICY: { index: "warranty-policy" },
  RETURN_POLICY: { index: "return-policy" },
  INFORMATION_SECURITY: { index: "information-security" },
  RESET_PASSWORD: { index: "reset-password" },
  ACTIVATE_ACCOUNT: { index: "activate-account/:id" },
  CHECKOUT: { index: "checkout" },
  PAYMENT_RESULT: { index: "payment/result" },
  NOTFOUND: { index: "*" },
};

export const PATHS = {
  home: getPath(`/${ROUTES.HOME.index}`),
  about: getPath(`/${ROUTES.ABOUT.index}`),
  products: getPath(`/${ROUTES.PRODUCTS.index}`),
  productDetail: getPath(`/${ROUTES.PRODUCT_DETAIL.index}`),
  productsByCategory: getPath(
    `/${ROUTES.PRODUCTS.index}/${ROUTES.PRODUCTS.PRODUCTS_BY_CATEGORY.index}`,
  ),
  contact: getPath(`/${ROUTES.CONTACT.index}`),
  faqs: getPath(`/${ROUTES.FAQs.index}`),
  picnicGuide: getPath(`/${ROUTES.PICNIC_GUIDE.index}`),
  login: getPath(`/${ROUTES.LOGIN.index}`),
  register: getPath(`/${ROUTES.REGISTER.index}`),
  wishlist: getPath(`/${ROUTES.WISHLIST.index}`),
  cart: getPath(`/${ROUTES.CART.index}`),
  orderInstruction: getPath(`/${ROUTES.ORDER_INSTRUCTION.index}`),
  deliverAndReceipt: getPath(`/${ROUTES.DELIVER_AND_RECEIPT.index}`),
  warrantyPolicy: getPath(`/${ROUTES.WARRANTY_POLICY.index}`),
  returnPolicy: getPath(`/${ROUTES.RETURN_POLICY.index}`),
  informationSecurity: getPath(`/${ROUTES.INFORMATION_SECURITY.index}`),
  resetPassword: getPath(`/${ROUTES.RESET_PASSWORD.index}`),
  activateAccount: getPath(`/${ROUTES.ACTIVATE_ACCOUNT.index}`),
  account: getPath(`/${ROUTES.ACCOUNT.index}`),
  addressBook: getPath(
    `/${ROUTES.ACCOUNT.index}/${ROUTES.ACCOUNT.ADDRESS_BOOK.index}`,
  ),
  purchase: getPath(
    `/${ROUTES.ACCOUNT.index}/${ROUTES.ACCOUNT.PURCHASE.index}`,
  ),
  orderDetails: getPath(
    `/${ROUTES.ACCOUNT.index}/${ROUTES.ACCOUNT.PURCHASE.index}/${ROUTES.ACCOUNT.PURCHASE.ORDER_DETAILS.index}`,
  ),
  editProfile: getPath(
    `/${ROUTES.ACCOUNT.index}/${ROUTES.ACCOUNT.EDIT_PROFILE.index}`,
  ),
  changePassword: getPath(
    `/${ROUTES.ACCOUNT.index}/${ROUTES.ACCOUNT.CHANGE_PASSWORD.index}`,
  ),
  deleteAccount: getPath(
    `/${ROUTES.ACCOUNT.index}/${ROUTES.ACCOUNT.DELETE_ACCOUNT.index}`,
  ),
  checkout: getPath(`/${ROUTES.CHECKOUT.index}`),
  paymentResult: getPath(`/${ROUTES.PAYMENT_RESULT.index}`),
};
