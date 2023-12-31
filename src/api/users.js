import axios from "axios";
import instance from ".";

// 회원가입
export const postSignUpApi = async (body) => {
  const res = await instance.post("/users/signup", body);
  return res;
};
// 로그인
export const postLoginApi = async (body) => {
  const res = await instance.post("/users/login", body);
  return res;
};
// 유저 닉네임 변경
export const putNicknameApi = async (body) => {
  const res = await instance.put("/mypage", body);
  return res;
};
// 로그인 조회
export const getUserInfoApi = async () => {
  const res = await instance.get("/users/info");
  return res;
};
// 마이페이지 조회
export const getMyPage = async () => {
  const res = await instance.get("/mypage");
  return res;
};
// 메인페이지 조회
export const getMainApi = async () => {
  const res = await instance.get("/main");
  return res;
};
// 칵테일레시피페이지 조회
export const getRecipePageApi = async () => {
  const res = await instance.get("/recipes");
  return res;
};
// 레시피상세페이지 조회
export const getRecipeDetailPageApi = async (id) => {
  const res = await instance.get(`recipes/${id}`);
  return res;
};

// 라운지페이지 작성
export const postLoungePageApi = async (body) => {
  const res = await instance.post("/lounge", body);
  return res;
};

// 라운지페이지 조회
export const getLoungePageApi = async () => {
  const res = await instance.get("/lounge");
  return res;
};

// 라운지페이지 삭제
export const deleteLoungePageApi = async (id) => {
  const res = await instance.delete(`/lounge/${id}`);
  return res;
};

// 찜하기
export const postZzimApi = async (id) => {
  const res = await instance.post(`/recipes/${id}`);
  return res;
};

// 찜취소
export const deleteZzimApi = async (id) => {
  const res = await instance.delete(`/recipes/${id}`);
  return res;
};
