import { axiosInstance } from "../config/axiosInstance";

export const userApis = {
  signUpUser: async (authInfo) => {
    axiosInstance.defaults.withCredentials = true;
    try {
      const data = await axiosInstance.post("/auth/signup", authInfo, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return error;
    }
  },

  signInUser: async (authInfo) => {
    axiosInstance.defaults.withCredentials = true;
    try {
      const result = await axiosInstance.post("/auth/login", authInfo, {
        withCredentials: true,
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
