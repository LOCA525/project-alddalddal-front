import React, { useState } from "react";
import { styled } from "styled-components";
import LoginModal from "./LoginModal";

function NavbarLogin({ navigate, data }) {
  const [modal, setModal] = useState(false);

  const onModalClickBtnHandler = () => {
    setModal(!modal);
  };
  return (
    <LoginBtnWrapper>
      <NickNameText>{data.data.nickname}</NickNameText>
      <div>님</div>
      <LoginBtn
        onClick={() => {
          onModalClickBtnHandler();
        }}
      >
        ∨
      </LoginBtn>
      {modal === true && <LoginModal navigate={navigate} setModal={setModal} Logindata={data} />}
    </LoginBtnWrapper>
  );
}

const NickNameText = styled.div`
  font-weight: bolder;
  font-size: 20px;
  color: #04ac9e;
  margin: 0px 20px 0px 30px;
  font-family: "Ramche";
`;

const LoginBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bolder;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  &:hover {
    color: #495057;
    background-color: #e4e4e4;
    cursor: pointer;
    transition: 0.5s;
  }
`;

export default NavbarLogin;
