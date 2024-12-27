import * as yup from "yup";

export const contactFormSchema = yup
  .object({
    fullname: yup.string().required("form-validation.required.fullname"),
    email: yup
      .string()
      .email("form-validation.format.email")
      .required("form-validation.required.email"),
    phone: yup.string().required("form-validation.required.phone"),
    content: yup.string().required("form-validation.contact.required.content"),
  })
  .required();
