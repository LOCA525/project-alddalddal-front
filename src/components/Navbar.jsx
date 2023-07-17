import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../images/알딸딸로고.png"
import { useSelector } from "react-redux";
import NavbarLogin from "./NavbarLogin";
import NavbarLogout from "./NavbarLogout";

const NavBar = () => {
  const navigate = useNavigate();
  // const isLogin = useSelector((state) => state.loginUser.isLogin);
  return (
    <div>
      <NavBarContainer>
        <LogoContainer         
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="ERROR" width={"130%"} />
          로고
        </LogoContainer>
        <BtnContainer>
          <NavBtnContainer
            onClick={() => {
              navigate("/recipe");
            }}
          >
            칵테일
          </NavBtnContainer>
          <NavBtnContainer
            onClick={() => {
              navigate("/lounge");
            }}
          >
            라운지
          </NavBtnContainer>
          <NavBtnContainer>유저들의 레시피</NavBtnContainer>
          {/* <LoginBtn
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </LoginBtn> */}
          <NavbarLogin navigate={navigate}/>
          {/* {(isLogin === true) ? <NavbarLogin navigate={navigate} isLogin={isLogin} /> : <NavbarLogout navigate={navigate} isLogin={isLogin} />} */}
        </BtnContainer>
      </NavBarContainer>
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
  /* background-color: #f79327; */
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
  };
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
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

// const LoginBtn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 16px;
//   font-family: "GoryeongStrawberry";
//   width: 70px;
//   height: 37px;
//   border: 1.4px solid #e6e4e8;
//   border-radius: 7px;
//   margin-left: 10px;
//   &:hover {
//     color: #495057;
//     border: 1.4px solid #495057;
//     cursor: pointer;
//     transition: 0.5s;
//   }
// `;
export default NavBar;
