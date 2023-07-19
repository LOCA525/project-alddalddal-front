import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const HamburgerModal = ({ toggleModal, setShowModal }) => {
  const navigate = useNavigate();
  const isLogin = JSON.parse(localStorage.getItem("user")).islogin;
  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={toggleModal}>&times;</CloseButton>
        <ModalNavBtnContainer
          onClick={() => {
            isLogin ? navigate("/mypage") : navigate("/login");
            setShowModal(false);
          }}
        >
          마이페이지
        </ModalNavBtnContainer>
        <ModalNavBtnContainer
          onClick={() => {
            navigate("/recipe");
            setShowModal(false);
          }}
        >
          칵테일
        </ModalNavBtnContainer>
        <ModalNavBtnContainer
          onClick={() => {
            navigate("/lounge");
            setShowModal(false);
          }}
        >
          라운지
        </ModalNavBtnContainer>
        <ModalNavBtnContainer>유저들의 레시피</ModalNavBtnContainer>
      </ModalContent>
    </Modal>
  );
};
const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const ModalNavBtnContainer = styled.div`
  font-family: "GoryeongStrawberry";
  font-size: 20px;
  margin: 10px 0;
  color: #6e6e6e;
  &:hover {
    color: #f79327;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export default HamburgerModal;
