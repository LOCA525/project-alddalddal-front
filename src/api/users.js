import instance from ".";

export const postSignUpApi = async (body) => {
  const res = await instance.post("/users/signup", body);
  return res;
};

export const postLoginApi = async (body) => {
  const res = await instance.post("/users/login", body);
  return res;
};
