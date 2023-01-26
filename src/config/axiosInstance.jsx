import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://13.125.220.74:8080/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
      return config;
    } else {
      return config;
    }
  },
  (error) => {
    console.log(error);
    return error;
  }
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return error;
    }
    if (
      error.response.data.errorMessage ===
      "JWT String argument cannot be null or empty."
    ) {
      localStorage.removeItem("token");
      window.location.reload();
    }
    return error;
  }
);
