import React from "react";
import { styled } from "styled-components";

const CommentCard = () => {
  return (
    <CommentCardContainer>
      <UserContainer>
        <div>유저 닉네임</div>
      </UserContainer>
      <ContentContainer>
        <div>게시글 내용은 일단 @!#!@$!@$#@!#!@#!@#!@#!@#$#@$!#$!@#$@$!@#$!입니다!</div>
      </ContentContainer>
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
`;
const ContentContainer = styled.div`
  width: 100%;
  border: 1px solid #ced3d7;
  padding: 20px;
  font-size: 15px;
  word-break: break-all;
`;
export default CommentCard;
