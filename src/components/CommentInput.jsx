import React, { useState } from "react";
import { styled } from "styled-components";
import { SelectedOption } from "./SelectOption";
import { useDispatch, useSelector } from "react-redux";
import { AddLoungeContent } from "../redux/modules/ProjectADD";
import { postLoungePageApi } from "../api/users";
import CommentModal from "./CommentModal";

const CommentInput = () => {

  const dispatch = useDispatch();

  const loungeContent = useSelector((state) => {return state.AddLoungeContent});

  const [comments, setComments] = useState({
    content: "",
  });

  const [commentModal, setCommentModal] = useState(false);

  const onChangeCommentHandler = (event) => {
    const { value, name } = event.target;
    setComments({
      ...comments,
      [name]: value
    });
  };

  const onAddCommentBtnHandler = () => {
    dispatch(AddLoungeContent({comments, selectedOption}))
    if (comments.content.length === 0) {
      alert("내용을 입력해주세요.")
    } else {
      setCommentModal(true);
    }
  };

  const [selectedOption, setSelectedOption] = useState('전체')

  const option = [
    { value: 1, name: '전체' },
    { value: 2, name: '보드카' },
    { value: 3, name: '진' },
    { value: 4, name: '럼' },
    { value: 5, name: '위스키' },
    { value: 6, name: '데킬라' }
  ];

  const [option1, setOption1] = useState(false);

  const ClickSelect = (event) => {
    event.stopPropagation();
    setOption1(!option1);
  };

  const clickBackground = () => {
    setOption1(false);
  }

  return (
    <div>
      <InputContainer>
        <CommentTitleContainer>
        {commentModal
        ? <CommentModal
            setCommentModal={setCommentModal}
            loungeContent={loungeContent}
            setComments={setComments}
            setSelectedOption={setSelectedOption}
          />
          : null}
            <CommentTitle>나의 의견을 남겨보아요!</CommentTitle>
            <div onClick={clickBackground}>
              <SelectBox>              
                    <Select onClick={ClickSelect}>
                      {selectedOption}<div>▼</div>
                    </Select>
                    {(option1 === true) && <SelectedOption
                      option={option}
                      setOption1={setOption1}
                      setSelectedOption={setSelectedOption}
                    />}
              </SelectBox>
            </div>
        </CommentTitleContainer>
        <CommentInputBox
          type="text"
          name="content"
          value={comments.content}
          placeholder="입력해주세요"
          onChange={onChangeCommentHandler} />
        <AddBtnContainer>
          <AddBtn
            onClick={onAddCommentBtnHandler}
          >입력</AddBtn>
        </AddBtnContainer>
      </InputContainer>
    </div>
  );
};

const CommentTitle = styled.div`
  font-family: "GoryeongStrawberry";
  font-size: 20px;
`;

const CommentTitleContainer = styled.div`
  width: 100%;
  height: 60px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #f79327;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  color: white;
  font-family: "GoryeongStrawberry";
  font-size: 20px;
`;

const CommentInputBox = styled.input`
  width: 90%;
  height: 70px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 30px 0px 0px 15px;
  padding: 10px;
  display: flex;
  word-break: break-all;
  overflow-y: scroll;

  &:focus-within {
    box-shadow: 0 0 0 1px #666666;
    }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0px 0 10px 0;
  border: 2px solid #f79327;
  border-radius: 10px;
  max-height: 700px;
`;

const AddBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddBtn = styled.button`
    width: 100px;
    height: 30px;
    color: white;
    font-weight: bolder;
    background-color: #f79327;
    border-radius: 8px;
    margin: 15px 15px 0px 0px;

    &:hover {
        background-color: #ca6b34;
        cursor: pointer;
    };
    &:active {
        width: 101px;
    };
`;

const SelectBox = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
`;

const Select = styled.div`
    width: 200px;
    height: 40px;
    border: 1px solid;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    justify-content: space-between;
    
    &:hover {
        background-color: #ca6b34;
        cursor: pointer;
    };

    @media screen and (max-width: 750px) {
        font-size: 80%;
        justify-content: center;
        width: 100px;
    } 
    
`;

export default CommentInput;
