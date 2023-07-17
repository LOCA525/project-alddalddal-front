import React, { useState } from "react";
import { styled } from "styled-components";
import CommentCard from "./CommentCard";
import { SelectedOption } from "./SelectOption";

const CommentInput = () => {


  const [comments, setComments] = useState({
    id: "",
    nickName: "",
    comments: ""
  });

  const onChangeCommentHandler = (event) => {
    const { value, name } = event.target;
    setComments({
      ...comments,
      [name]: value
    });
  };

  const [selectedOption, setSelectedOption] = useState('리액트')

  const option = [
    { value: 1, name: '럼주' },
    { value: 2, name: 'a' },
    { value: 3, name: 'b' },
    { value: 4, name: 'c' }
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
          <CommentTitle>한 마디 남겨보세요</CommentTitle>
          <div onClick={clickBackground}>
            <SelectBox>
              <Box>
                <div>
                  <Select onClick={ClickSelect}>
                    {selectedOption}
                  </Select>
                  {(option1 === true) && <SelectedOption
                    option={option}
                    setOption1={setOption1}
                    setSelectedOption={setSelectedOption}
                  />}
                </div>
              </Box>
            </SelectBox>
          </div>
        </CommentTitleContainer>
        <CommentInputBox
          type="text"
          name="comment"
          value={comments.comment}
          placeholder="입력해주세요"
          onChange={onChangeCommentHandler} />
        <AddBtnContainer>
          <AddBtn>입력</AddBtn>
        </AddBtnContainer>
      </InputContainer>
    </div>
  );
};

const CommentTitle = styled.div`
  font-family: "GoryeongStrawberry";
  font-size: 20px;
  margin-bottom: 20px;
`;

const CommentTitleContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentInputBox = styled.input`
  width: 100%;
  height: 70px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  overflow-y: scroll;

  &:focus-within {
    box-shadow: 0 0 0 1px #666666;
    }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  border: 2px solid #f79327;
  border-radius: 10px;
  padding: 16px;
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
    margin-top: 10px;

    &:hover {
        background-color: #ca6b34;
        cursor: pointer;
    };
    &:active {
        width: 101px;
    };
`;

const SelectBox = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 10px;
`;

const Box = styled.div`
    display: flex;
`

const Select = styled.div`
    width: 300px;
    height: 40px;
    border: 1px solid;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    justify-content: space-between;
    
`;

export default CommentInput;
