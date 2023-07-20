import React from "react";
import { styled } from "styled-components";
import { postLoungePageApi } from "../../api/users";
import { useQueryClient, useMutation } from "react-query";

function CommentModal({ setCommentModal, loungeContent, setComments, setSelectedOption }) {
  const onCheckBtnHandler = async () => {
    setCommentModal(false);
    setComments({
      content: "",
    });
    setSelectedOption("전체");

    try {
      const res = await postLoungePageApi(loungeContent);
      if (res.status === 200) {
        console.log("res", res);
        queryClient.invalidateQueries(["loungeData"]);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(loungeContent);
  };

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("loungeData");
  console.log(data.data);
  const mutation = useMutation(postLoungePageApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(["loungeData"]);
      console.log("success");
    },
  });

  return (
    <BackgoroundModal>
      <ModalContainer>
        <BorderContainer>
          <HeaderText>✨ 업로드를 완료하시겠습니까? ✨</HeaderText>
          <ButtonContainer>
            <AddBtn onClick={onCheckBtnHandler}>✔</AddBtn>
            <CloseBtn
              onClick={() => {
                setCommentModal(false);
              }}
            >
              x
            </CloseBtn>
          </ButtonContainer>
        </BorderContainer>
      </ModalContainer>
    </BackgoroundModal>
  );
}

const ModalContainer = styled.div`
  width: 600px;
  height: 400px;
  padding: 20px;
  background: white;
  display: flex;
  border-radius: 8px;
`;

const BorderContainer = styled.div`
  width: 580px;
  height: 100%;
  border: 3px solid #f79327;
  border-radius: 10px;
  display: flex;
  display: grid;
  justify-content: center;
  align-items: center;
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

const HeaderText = styled.div`
  margin-top: 60px;
  font-family: "Ramche";
  font-size: 25px;
  font-weight: bolder;
  color: black;
`;

const ButtonContainer = styled.div`
  padding: 100px;
  display: flex;
  justify-content: space-between;
`;

const AddBtn = styled.button`
  font-size: 150%;
  color: green;

  &:hover {
    font-size: 160%;
    color: black;
    cursor: pointer;
  }
`;

const CloseBtn = styled.button`
  font-size: 150%;
  color: red;

  &:hover {
    font-size: 160%;
    color: black;
    cursor: pointer;
  }
`;

export default CommentModal;
