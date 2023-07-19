import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 인터셉터 리스폰스 토큰 담기
instance.interceptors.response.use(
  (response) => {
    if (response.headers.access && response.headers.refresh) {
      localStorage.setItem("accessToken", response.headers.access);
      localStorage.setItem("refreshToken", response.headers.refresh);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 인터셉터 리퀘스트 토큰 헤더에싣기
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      config.headers["Access"] = accessToken;
    }
    if (refreshToken) {
      config.headers["Refresh"] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
