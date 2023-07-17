import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const CardList = () => {
  return (
    <CardListContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardListContainer>
  );
};

const CardListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 20px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  align-items: center;
  align-items: stretch;
  align-content: center;
`;
export default CardList;
