import React from "react";
import { MainLayout } from "../styles/layouts";
import CommentList from "../components/LoungePage/CommentList";
import { styled } from "styled-components";
import CommentInput from "../components/LoungePage/CommentInput";

const LoungePage = () => {
  return (
    <MainLayout>
      <LoungePageContainer>
        <CommentInput />
        <CommentList />
      </LoungePageContainer>
    </MainLayout>
  );
};

const LoungePageContainer = styled.div`
  padding: 50px;
`;
export default LoungePage;
