import React from "react";
import { styled } from "styled-components";
import MainCommentCard from "./MainCommentCard";

function MainCommentList() {
  return (
    <CommentListContainer>
      <MainCommentCard />
    </CommentListContainer>
  );
}

const CommentListContainer = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  border: 2px solid #f79327;
  border-radius: 10px;
  padding: 16px;
  max-height: 930px;
  overflow-y: scroll;
`;

export default MainCommentList;
