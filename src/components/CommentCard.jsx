import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { getLoungePageApi, postLoungePageApi } from "../api/users";

const CommentCard = () => {
  
  const { isLoading, error, data } = useQuery("loungeData", getLoungePageApi);
  
  return (
    <CommentCardContainer>
      {data?.data.reverse().map((item) => {
        return (
          <div key={item.id}>
            <UserContainer>
              <div>{item.nickname}</div>
              <div>종류 ▽ <BaseText>{item.base}</BaseText></div>
            </UserContainer>
            <ContentContainer>
              <div>{item.content}</div>
              <div><RemoveBtn>삭제</RemoveBtn></div>
            </ContentContainer>
          </div>
        )
      })}
    </CommentCardContainer>
  );
};

const CommentCardContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
const UserContainer = styled.div`
  width: 100%;
  border-top: 1px solid #ced3d7;
  border-left: 1px solid #ced3d7;
  border-right: 1px solid #ced3d7;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  width: 100%;
  border: 1px solid #ced3d7;
  padding: 20px;
  font-size: 15px;
  word-break: break-all;
  display: flex;
  justify-content: space-between;
`;

const RemoveBtn = styled.button`
    width: 80px;
    height: 30px;
    color: white;
    font-weight: bolder;
    background-color: #f79327;
    border-radius: 8px;
    &:hover {
        background-color: #ca6b34;
        cursor: pointer;
    };
    &:active {
        font-size: 80%;
    };
`;

const BaseText = styled.div`
  margin: 5px;
  padding-left: 20px;
  font-size: 80%;
  color: #0d5358;
  font-weight: bolder;
`;

export default CommentCard;
