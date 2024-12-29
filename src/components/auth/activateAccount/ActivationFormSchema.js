import * as yup from "yup";

export const activationFormSchema = yup
  .object({
    activationCode: yup
      .string()
      .required("form-validation.required.activation_code"),
  })
  .required();
