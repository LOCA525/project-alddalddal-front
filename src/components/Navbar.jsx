import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../images/알딸딸로고.png";
import HamburgerModal from "./HambergerModal";

const NavBar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <NavBarContainer>
        <LogoContainer
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="ERROR" width="130%" />
          로고
        </LogoContainer>
        <div style={{ display: "flex" }}>
          <HamburgerButton onClick={toggleModal}>
            <span />
            <span />
            <span />
          </HamburgerButton>
          <NavContainer>
            <NavBtnContainer
              onClick={() => {
                navigate("/mypage");
                setShowModal(false);
              }}
            >
              마이페이지
            </NavBtnContainer>
            <NavBtnContainer
              onClick={() => {
                navigate("/recipe");
                setShowModal(false);
              }}
            >
              칵테일
            </NavBtnContainer>
            <NavBtnContainer
              onClick={() => {
                navigate("/lounge");
                setShowModal(false);
              }}
            >
              라운지
            </NavBtnContainer>
            <NavBtnContainer>유저들의 레시피</NavBtnContainer>
          </NavContainer>

          <LoginBtn
            onClick={() => {
              navigate("/login");
              setShowModal(false);
            }}
          >
            로그인
          </LoginBtn>
        </div>
      </NavBarContainer>
      {showModal && <HamburgerModal setShowModal={setShowModal} toggleModal={toggleModal} />}
    </div>
  );
};

const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px -2px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const LogoContainer = styled.div`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 10px;
  display: flex;
  font-size: 30px;
  font-weight: 900;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    width: 135px;
  }

  &:active {
    width: 130px;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;

  cursor: pointer;
  span {
    width: 30px;
    height: 3px;
    background-color: #6e6e6e;
    margin-bottom: 5px;
  }
  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 750px) {
    display: none;
  }
`;

const NavBtnContainer = styled.div`
  font-family: "GoryeongStrawberry";
  font-size: 20px;
  margin-right: 30px;
  color: #6e6e6e;

  &:hover {
    color: #f79327;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const LoginBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: "GoryeongStrawberry";
  width: 70px;
  height: 37px;
  border: 1.4px solid #e6e4e8;
  border-radius: 7px;
  margin-left: 10px;
  &:hover {
    color: #495057;
    border: 1.4px solid #495057;
    cursor: pointer;
    transition: 0.5s;
  }
`;

export default NavBar;
