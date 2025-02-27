import * as yup from "yup";

export const editProfileSchema = yup
  .object({
    fullName: yup.string().required("form-validation.required.fullname"),
    phone: yup.string(),
    gender: yup.string(),
    birthday: yup.string().nullable(),
  })
  .required();
