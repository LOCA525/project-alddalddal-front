import React, { useState } from 'react'
import { styled } from 'styled-components';
import { MainLayout } from '../styles/layouts';
import { useNavigate } from 'react-router-dom';

function Joinpage() {

    const navigate = useNavigate();
    
    const [joinInputs, setJoinInputs] = useState({
        nickName: "",
        email: "",
        password: ""
    });

    const { nickName, email, password} = joinInputs;

    const onChangeHandler = (event) => {
        const {value, name} = event.target;
        setJoinInputs({
            ...joinInputs,
            [name]: value
        })
    };

    const onJoinBtnHandler = () => {
        // setJoinInputs({
        //     nickName,
        //     email,
        //     password
        // })
        console.log(joinInputs);
        // navigate("/login")
    };

    return (
        <MainLayout style={{backgroundColor: '#f7f7f7'}}>
            <JoinContainer>
                <JoinHeaderContainer>
                    회원가입
                </JoinHeaderContainer>
                <JoinContentWrapper>
                    <InputTitleContainer>🔸 닉네임</InputTitleContainer>
                    <EmailInput
                        type='text'
                        value={nickName}
                        name='nickName'
                        placeholder='당신의 새로운 닉네임을 입력해주세요.'
                        onChange={onChangeHandler}
                    ></EmailInput>
                    <InputTitleContainer>🔸 이메일</InputTitleContainer>
                    <EmailInput
                        type='text'
                        value={email}
                        name='email'
                        placeholder='당신의 새로운 이메일을 입력해주세요.'
                        onChange={onChangeHandler}
                    ></EmailInput>
                    <InputTitleContainer>🔸 비밀번호</InputTitleContainer>
                    <EmailInput
                        type='text'
                        value={password}
                        name='password'
                        placeholder='당신의 새로운 비밀번호를 입력해주세요.'
                        onChange={onChangeHandler}
                    ></EmailInput>
                    <JoinBtnWrapper>
                        <LoginLinkBtn onClick={() =>{
                            navigate("/login")
                        }}
                        >로그인하러 가기</LoginLinkBtn>
                        <JoinBtn onClick={onJoinBtnHandler}>가입 완료</JoinBtn>
                    </JoinBtnWrapper>
                </JoinContentWrapper>
            </JoinContainer>
        </MainLayout>
    )
}

const JoinContainer = styled.div`
    width: 700px;
    margin: 50px auto 50px auto;
    padding: 50px;
    border-radius: 10px;
    height: 750px;
    box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

const JoinHeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    align-items: center;
    display: flex;
    padding: 0px 16px;
    justify-content: center;
    font-family: "GoryeongStrawberry";
    font-size: 20px;
`;

const JoinContentWrapper = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    font-family: "GoryeongStrawberry";
`;

const EmailInput = styled.input`
    border: 1px solid #333333;
    border-radius: 10px;
    height: 40px;
    width: 500px;
    outline: none;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 40px;

    &:focus-within {
    box-shadow: 0 0 0 1px #000;
    }
`;

const JoinBtnWrapper = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
`;

const LoginLinkBtn = styled.button`
    margin: 30px auto 50px auto;
    height: 40px;
    width: 200px;
    border-radius: 30px;
    border: 1px solid #f79327;
    color: #f79327;
    font-weight: bolder;
    font-size: 110%;
    box-shadow: rgba(187, 187, 187, 0.45) 0.5px 0.5px 10px;

    &:hover {
        border: 2px solid #f79327;
        cursor: pointer;
    };
    &:active {
        background-color: #f3f3f3;;
    };
`;

const JoinBtn = styled.button`
    margin: 30px auto 50px auto;
    height: 40px;
    width: 200px;
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
    };
    &:active {
        width: 202px;
    };
`;

export default Joinpage