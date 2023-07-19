import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
// import { loginBtn } from '../redux/modules/ProjectADD';

function NavbarLogin({navigate, data}) {

    // const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    
    const onModalClickBtnHandler = () => {
        setModal(!modal);
    };

  return (
    <LoginBtnWrapper>
        <NickNameText>{data.data.nickname}</NickNameText><div>님</div>
        <LoginBtn
            onClick={() => {
                onModalClickBtnHandler()
            }}
        >
            ▽
        </LoginBtn>
        {(modal === true)
        && <LoginModal
                navigate={navigate}
                setModal={setModal}
                data={data}
            />}
    </LoginBtnWrapper>
  )
}

const LoginModal = ({navigate, setModal, data}) => {

    // const onClickLogoutBtnHandler = () => {
    //     dispatch(loginBtn(false));
    // }

    return (
        <BackgoroundModal>
            <NickNameTextContainer>
                <ModalContainer>{data.data.nickname}</ModalContainer>
                <div>님</div>
            </NickNameTextContainer>
                <MypageBtn>로그아웃하기</MypageBtn>
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
  font-size: 15px;
  font-family: "GoryeongStrawberry";
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
    };
    &:active {
        width: 202px;
    };
`;

const CloseBtn = styled.button`
    margin: 20px auto 10px auto;
    border-radius: 10px;

    &:hover {
        font-weight: bolder;
        cursor: pointer;
    };
`;

const ModalContainer = styled.div`
    margin: 5px;
    font-family: "TTWanjudaedunsancheB";
    font-size: 150%;
`;

export default NavbarLogin