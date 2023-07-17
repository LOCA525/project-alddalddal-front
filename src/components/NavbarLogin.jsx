import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
// import { loginBtn } from '../redux/modules/ProjectADD';

function NavbarLogin({navigate}) {

    // const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    
    const onModalClickBtnHandler = () => {
        setModal(true)
    };

  return (
    <>
        <LoginBtn
            onClick={() => {
                onModalClickBtnHandler()
            }}
        >
            닉네임
        </LoginBtn>
        {(modal === true) && <LoginModal navigate={navigate} setModal={setModal} />}
    </>
  )
}

const LoginModal = ({navigate, setModal}) => {

    // const onClickLogoutBtnHandler = () => {
    //     dispatch(loginBtn(false));
    // }

    return (
        <BackgoroundModal>
            <MypageBtn onClick={() => {
                setModal(false)
                navigate("/mypage")
                }}>마이페이지로 이동</MypageBtn>
            <CloseBtn onClick={() => setModal(false)}>닫기</CloseBtn>           
            {/* <button onClick={onClickLogoutBtnHandler}>로그아웃</button> */}
        </BackgoroundModal>
    )
};

const BackgoroundModal = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
    margin: 60px 30px;
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

const MypageBtn = styled.button`
    margin: 50px auto 50px auto;
    height: 80px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid #ca6b34;
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

const CloseBtn = styled.button`
    margin: 50px auto 50px auto;
    border-radius: 10px;

    &:hover {
        font-weight: bolder;
        cursor: pointer;
    };
`;

export default NavbarLogin