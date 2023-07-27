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
    alert("로그아웃되었습니다!")
    navigate("/");
  };

  return (
    <BackgroundModal onClick={() => setModal(false)}>
      <Modal>
        <NickNameTextContainer>
          <ModalContainer>{Logindata.data.nickname}</ModalContainer>
          <div>님</div>
        </NickNameTextContainer>
        <MypageBtn onClick={onClickLogoutBtnHandler}>로그아웃하기</MypageBtn>
        <CloseBtn onClick={() => setModal(false)}>닫기</CloseBtn>
      </Modal>
    </BackgroundModal>
  );
}

const BackgroundModal = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
  margin: 60px 30px;
  padding: 20px;
  width: 19%;
  height: 28%;
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
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  background-color: #e9e9e9;
  border-radius: 10px;

  @media screen and (max-width: 1100px) {
    font-size: 50%;
    margin: 0px;
    padding: 0px;
  }
`;

const CloseBtn = styled.button`
  margin: 20px auto 10px auto;
  border-radius: 10px;

  @media screen and (max-width: 1100px) {
    font-size: 50%;
    margin: 0px;
    padding: 0px;
  }

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
  width: 100%;
  height: 60%;
  border-radius: 5px;
  font-size: 110%;
  display: flex;
  align-items: center;
  font-family: "GoryeongStrawberry";

  @media screen and (max-width: 1100px) {
    font-size: 50%;
    margin: 0px;
    padding: 0px;
  }

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

export default LoginModal;
