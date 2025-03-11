import { getCategoryBySlug } from "@/services/categoryService";
import { getGuideBySlug } from "@/services/guideService";
import { getProductBySlug } from "@/services/productService";
import StatusCodes from "@/utils/status/StatusCodes";

export const CategoryLoader = async ({ params }) => {
  if (params?.["category-slug"]) {
    const slug = params?.["category-slug"];
    const res = await getCategoryBySlug(slug);

    let data = {};
    if (res && res.EC === StatusCodes.SUCCESS) {
      data = res.DT;
      data.crumb = data?.name;
    }

    return data;
  } else {
    return { crumb: null };
  }
};

export const ProductLoader = async ({ params }) => {
  if (params?.["product-slug"]) {
    const slug = params?.["product-slug"];
    const res = await getProductBySlug(slug);

    let data = {};
    if (res && res.EC === StatusCodes.SUCCESS) {
      data = res.DT;
      data.crumb = data?.name;
    }

    return data;
  } else {
    return { crumb: null };
  }
};

export const PicnicGuideLoader = async ({ params }) => {
  if (params?.["guide-slug"]) {
    const slug = params?.["guide-slug"];
    const res = await getGuideBySlug(slug);

    let data = {};
    if (res && res.EC === StatusCodes.SUCCESS) {
      data = res.DT;
      data.crumb = data?.title;
    }

    return data;
  } else {
    return { crumb: null };
  }
};
