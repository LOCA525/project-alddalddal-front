import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { getUserInfoApi } from "../../api/users";

function LoginModal({ navigate, setModal, Logindata }) {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery("userInfo", getUserInfoApi);

  if (isLoading) return "Loading...";
  console.log("navbar", data);

  const onClickLogoutBtnHandler = () => {
    localStorage.setItem("user", JSON.stringify({ name: "No User", islogin: false }));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    queryClient.invalidateQueries(["userInfo"]);
    navigate("/");
  };

  return (
    <BackgoroundModal>
      <NickNameTextContainer>
        <ModalContainer>{Logindata.data.nickname}</ModalContainer>
        <div>님</div>
      </NickNameTextContainer>
      <MypageBtn onClick={onClickLogoutBtnHandler}>로그아웃하기</MypageBtn>
      <CloseBtn onClick={() => setModal(false)}>닫기</CloseBtn>
    </BackgoroundModal>
  );
}

const BackgoroundModal = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
  margin: 60px 30px;
  padding: 20px;
  width: 300px;
  height: 200px;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

const NickNameTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100px;
  margin-bottom: 10px;
  background-color: #e9e9e9;
  border-radius: 10px;
`;

const CloseBtn = styled.button`
  margin: 20px auto 10px auto;
  border-radius: 10px;

  &:hover {
    font-weight: bolder;
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  margin: 5px;
  font-family: "TTWanjudaedunsancheB";
  font-size: 150%;
`;

const MypageBtn = styled.div`
  margin: 20px auto 0px auto;
  padding: 10px;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  font-size: 110%;
  display: flex;
  align-items: center;
  font-family: "GoryeongStrawberry";

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
  &:active {
    width: 202px;
  }
`;

export default LoginModal;
