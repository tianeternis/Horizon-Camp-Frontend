import { PASSWORD_MAX, PASSWORD_MIN } from "@/constants";
import * as yup from "yup";

export const confirmEmailFormSchema = yup
  .object({
    email: yup
      .string()
      .email("form-validation.format.email")
      .required("form-validation.required.email"),
  })
  .required();

export const setNewPasswordFormSchema = yup
  .object({
    code: yup.string().required("form-validation.required.reset_password_code"),
    password: yup
      .string()
      .min(PASSWORD_MIN, "form-validation.password.min")
      .max(PASSWORD_MAX, "form-validation.password.max")
      .required("form-validation.required.password"),
  })
  .required();
