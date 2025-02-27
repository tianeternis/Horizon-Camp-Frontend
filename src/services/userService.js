import axios from "@/configs/axios";

export const getUser = (id) => {
  return axios.get(`/user/get/${id}`);
};

export const editProfile = (
  id,
  { fullName, gender, phone, birthday, avatar },
) => {
  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("gender", gender);
  formData.append("phone", phone);
  formData.append("avatar", avatar);
  if (birthday) {
    formData.append("birthday", new Date(birthday).toISOString());
  }

  return axios.put(`/user/edit-profile/${id}`, formData);
};

export const changePassword = (id, data) => {
  return axios.put(`/user/change-password/${id}`, data);
};

export const sendVerificationCode = (data) => {
  return axios.post(`/user/send-code`, data);
};

export const resetPassword = (id, data) => {
  return axios.put(`/user/reset-password/${id}`, data);
};
