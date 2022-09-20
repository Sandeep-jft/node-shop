import { axiosInstance } from "src/utils/api";
import { PATHS } from "src/utils/paths";

export const loginUser = async (userDetails) => {
  try {
    const data = await axiosInstance().post(PATHS.USER_LOGIN, userDetails);
    return data;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (userDetails) => {
  try {
    const data = await axiosInstance().post(
      PATHS.USER,
      userDetails
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const logout = async (token, id) => {
  try {
    const { data } = await axiosInstance(token).get(PATHS.USER_LOGOUT(id));
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserDetails = async (token) => {
  try {
    const { data } = await axiosInstance(token).get(PATHS.USER);
    return data;
  } catch (error) {
    return error;
  }
};
