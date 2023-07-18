import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 인터셉터 리스폰스 토큰 담기
instance.interceptors.response.use(
  (response) => {
    if (response.headers.access && response.headers.refresh) {
      sessionStorage.setItem("accessToken", response.headers.access);
      sessionStorage.setItem("refreshToken", response.headers.refresh);
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
    const accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = sessionStorage.getItem("refreshToken");

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
