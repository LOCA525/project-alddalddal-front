import React from "react";
import { styled } from "styled-components";

const Card = () => {
  return <CardContainer>카드입니다</CardContainer>;
};

const CardContainer = styled.div`
  width: 300px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 20px;
`;
export default Card;
