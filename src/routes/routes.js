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
  MEMBER_POLICY: { index: "member-policy" },
  INFORMATION_SECURITY: { index: "information-security" },
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
  memberPolicy: getPath(`/${ROUTES.MEMBER_POLICY.index}`),
  informationSecurity: getPath(`/${ROUTES.INFORMATION_SECURITY.index}`),
};
