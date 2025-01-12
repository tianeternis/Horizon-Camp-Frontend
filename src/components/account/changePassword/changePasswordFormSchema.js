import { PASSWORD_MAX, PASSWORD_MIN } from "@/constants";
import * as yup from "yup";

export const changePasswordFormSchema = yup
  .object({
    currentPassword: yup
      .string()
      .min(PASSWORD_MIN, "form-validation.password.min")
      .max(PASSWORD_MAX, "form-validation.password.max")
      .required("form-validation.required.password"),
    newPassword: yup
      .string()
      .min(PASSWORD_MIN, "form-validation.password.min")
      .max(PASSWORD_MAX, "form-validation.password.max")
      .required("form-validation.required.password")
      .test(
        "different_current_password",
        "form-validation.password.different_current_password",
        function (value) {
          const { currentPassword } = this.parent;
          return value !== currentPassword;
        },
      ),
    confirmNewPassword: yup
      .string()
      .oneOf(
        [yup.ref("newPassword")],
        "form-validation.password.confirm_password_not_match",
      )
      .required("form-validation.required.confirm_password"),
  })
  .required();
