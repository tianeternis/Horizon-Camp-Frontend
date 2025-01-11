import * as yup from "yup";

export const deleteAccountFormSchema = yup
  .object({
    password: yup
      .string()
      .min(6, "form-validation.password.min")
      .max(20, "form-validation.password.max")
      .required("form-validation.required.password"),
  })
  .required();
