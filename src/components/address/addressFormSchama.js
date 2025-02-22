import * as yup from "yup";

export const addressFormSchema = yup
  .object({
    fullName: yup.string().required("form-validation.required.fullname"),
    phone: yup.string().required("form-validation.required.phone"),
    province: yup.object().required("form-validation.required.province"),
    district: yup.object().required("form-validation.required.district"),
    ward: yup.object().required("form-validation.required.ward"),
    details: yup.string().required("form-validation.required.details_address"),
    default: yup.boolean().default(false),
  })
  .required();
