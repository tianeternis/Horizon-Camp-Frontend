import * as yup from "yup";

export const editProfileSchema = yup
  .object({
    fullname: yup.string().required("form-validation.required.fullname"),
    phoneNumber: yup.string(),
    gender: yup.string(),
    birthday: yup.string().nullable(),
  })
  .required();
