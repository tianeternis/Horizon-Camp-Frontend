const getPath = (path) => (params) =>
  path.replace(/:([a-zA-Z0-9_]+)/g, (match, paramName) => {
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
    PRODUCT_DETAIL: {
      index: ":id",
    },
  },
  ACCOUNT: {
    index: "account",
    ADDRESS_BOOK: {
      index: "address-book",
    },
    PURCHASE: {
      index: "purchase",
    },
  },
  CONTACT: { index: "contact" },
  FAQs: { index: "faqs" },
  BLOGS: { index: "blogs" },
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
  ACTIVATE_ACCOUNT: { index: "activate-account" },
  NOTFOUND: { index: "*" },
};

export const PATHS = {
  home: getPath(`/${ROUTES.HOME.index}`),
  about: getPath(`/${ROUTES.ABOUT.index}`),
  products: getPath(`/${ROUTES.PRODUCTS.index}`),
  productDetail: getPath(
    `/${ROUTES.PRODUCTS.index}/${ROUTES.PRODUCTS.PRODUCT_DETAIL.index}`,
  ),
  contact: getPath(`/${ROUTES.CONTACT.index}`),
  faqs: getPath(`/${ROUTES.FAQs.index}`),
  blogs: getPath(`/${ROUTES.BLOGS.index}`),
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
};
