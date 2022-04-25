import axios from "axios";
const API_URL = "http://localhost:8000/v1/user/";

export const getAllUser = () => {
  return axios.get(API_URL);
};

export const deleteUser = (userDialog) => {
  const dataDelete = axios.delete(`${API_URL}${userDialog.current._id}`);
  return dataDelete;
};

export const addUser = (data) => {
  const dataSave = axios.post(API_URL, data);
  return dataSave;
};

export const updateUser = (thuTu, data) => {
  const dataUpdate = axios.put(`${API_URL}${thuTu.current}`, data);
  return dataUpdate;
};
