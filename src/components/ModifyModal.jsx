import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { putNicknameApi } from "../api/users";

const ModifyModal = ({ setModifyModal }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(putNicknameApi, {
    onSuccess: () => {
      //   queryClient.invalidateQueries("");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [newNickName, setNewNickName] = useState({
    nickname: "",
  });

  const onChangeNewNickNameBtn = (event) => {
    const { value, name } = event.target;
    setNewNickName({
      ...newNickName,
      [name]: value,
    });
  };

  const onClickNewNickNameBtn = () => {
    mutation.mutate(newNickName);
    alert(`닉네임이 ${newNickName.nickname}로 변경되었습니다!`);
    setModifyModal(false);
  };

  return (
    <BackgoroundModal>
      <ModalContainer>
        <ModalWrapper>
          <ModifyModalHeader>닉네임 변경</ModifyModalHeader>
          <ModifyModalTitle>변경할 닉네임을 입력해주세요</ModifyModalTitle>
          <ModifyInput
            type="text"
            value={newNickName.nickname}
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            onChange={onChangeNewNickNameBtn}
          ></ModifyInput>
          <ModifyBtn onClick={onClickNewNickNameBtn}>변경하기</ModifyBtn>
          <CloseBtnWrapper>
            <CloseBtn onClick={() => setModifyModal(false)}>x</CloseBtn>
          </CloseBtnWrapper>
        </ModalWrapper>
      </ModalContainer>
    </BackgoroundModal>
  );
};

const ModalContainer = styled.div`
  width: 800px;
  height: 600px;
  padding: 20px;
  background: white;
  display: flex;
  border-radius: 8px;
  display: grid;
`;

const BackgoroundModal = styled.div`
  margin: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  border: 1px solid #f79327;
  border-radius: 10px;
  display: flex;
  display: grid;
`;

const ModifyModalHeader = styled.div`
  width: 100%;
  height: 60px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #f79327;
  align-items: center;
  display: flex;
  padding: 0px 16px;
  color: white;
  font-family: "GoryeongStrawberry";
  font-size: 20px;
`;

const ModifyModalTitle = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0px 16px;
  font-family: "GoryeongStrawberry";
  font-size: 20px;
`;

const ModifyInput = styled.input`
  width: 80%;
  height: 60px;
  margin: 0px auto;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  padding: 0px 16px;

  &:focus-within {
    box-shadow: 0 0 0 1px #000;
  }
`;

const ModifyBtn = styled.button`
  margin: auto;
  height: 40px;
  width: 300px;
  border-radius: 30px;
  background-color: #f79327;
  color: white;
  font-weight: bolder;
  font-size: 110%;
  box-shadow: rgba(150, 150, 150, 0.45) 1px 1px 10px;

  &:hover {
    background-color: #ca6b34;
    cursor: pointer;
  }
  &:active {
    width: 302px;
  }
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 2px solid #f79327;
  border-radius: 100%;
  color: #f79327;

  &:hover {
    border: 3px solid #f79327;
    cursor: pointer;
  }
`;

export default ModifyModal;
