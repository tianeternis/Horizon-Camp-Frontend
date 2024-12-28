import { PASSWORD_MAX, PASSWORD_MIN } from "@/constants";
import * as yup from "yup";

export const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .email("form-validation.format.email")
      .required("form-validation.required.email"),
    password: yup
      .string()
      .min(PASSWORD_MIN, "form-validation.password.min")
      .max(PASSWORD_MAX, "form-validation.password.max")
      .required("form-validation.required.password"),
  })
  .required();

export const registerFormSchema = yup
  .object({
    fullname: yup.string().required("form-validation.required.fullname"),
    email: yup
      .string()
      .email("form-validation.format.email")
      .required("form-validation.required.email"),
    password: yup
      .string()
      .min(PASSWORD_MIN, "form-validation.password.min")
      .max(PASSWORD_MAX, "form-validation.password.max")
      .required("form-validation.required.password"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "form-validation.password.confirm_password_not_match",
      )
      .required("form-validation.required.confirm_password"),
  })
  .required();
