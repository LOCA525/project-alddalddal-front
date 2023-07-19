import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <CardListContainer>
      {data?.data.map((item) => {
        return <Card item={item} key={item.recipeId} />;
      })}
    </CardListContainer>
  );
};

const CardListContainer = styled.div`
  padding: 50px 100px 50px 100px;
  width: 100%;
  display: grid;
  grid-gap: 50px 20px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  align-items: center;
  align-items: stretch;
  align-content: center;
`;
export default CardList;
