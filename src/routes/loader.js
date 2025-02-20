import { getCategoryBySlug } from "@/services/categoryService";
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
