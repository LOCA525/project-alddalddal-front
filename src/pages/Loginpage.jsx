import React, { useState } from "react";
import { styled } from "styled-components";
import { MainLayout } from "../styles/layouts";
import { Link, useNavigate } from "react-router-dom";
import { postSignUpApi } from "../api/users";
// import { useDispatch } from 'react-redux';
// import { loginBtn } from '../redux/modules/ProjectADD';

function Loginpage() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginInputs;

  const onChange = (event) => {
    const { value, name } = event.target;
    setLoginInputs({
      ...loginInputs,
      [name]: value,
    });
  };

  const onLoginBtnHandler = async () => {
    // dispatch(loginBtn(true));
    // setLoginInputs({
    //     email,
    //     password
    // })

    console.log(loginInputs);
    try {
      const res = await postSignUpApi(loginInputs);
      if (res.status === 200) {
        console.log("res", res);
      }
    } catch (err) {
      console.log(err);
    }

    // navigate("/")
  };

  return (
    <MainLayout style={{ backgroundColor: "#f7f7f7" }}>
      <LoginContainer>
        <LoginHeaderContainer>로그인</LoginHeaderContainer>
        <LoginContentContainer>
          <EmailInput
            type="text"
            value={email}
            name="email"
            placeholder="이메일을 입력해주세요."
            onChange={onChange}
          ></EmailInput>
          <EmailInput
            type="text"
            value={password}
            name="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChange}
          ></EmailInput>
          <LoginBtn onClick={onLoginBtnHandler}>로그인</LoginBtn>
          <h4>혹시 회원이 아니라면?</h4>
          <Link to="/users/signup">회원가입</Link>
        </LoginContentContainer>
      </LoginContainer>
    </MainLayout>
  );
}

const LoginContainer = styled.div`
  width: 700px;
  margin: 100px auto 50px auto;
  padding: 50px;
  border-radius: 10px;
  height: 600px;
  box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const LoginHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  padding: 0px 16px;
  justify-content: center;
  font-family: "GoryeongStrawberry";
  font-size: 20px;
`;

const LoginContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  border-bottom: 1px solid #333333;
  height: 40px;
  width: 500px;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 20px;

  &:focus-within {
    box-shadow: 0 0 0 1px #000;
    border-radius: 10px;
  }
`;

const LoginBtn = styled.button`
  margin: 50px auto 50px auto;
  height: 40px;
  width: 500px;
  border-radius: 30px;
  background-color: #f79327;
  color: white;
  font-weight: bolder;
  font-size: 110%;
  box-shadow: rgba(150, 150, 150, 0.45) 1px 1px 10px;

  &:hover {
    background-color: #ca6b34;
    cursor: pointer;
    transition: 0.5s;
  }
  &:active {
    width: 502px;
  }
`;

export default Loginpage;
