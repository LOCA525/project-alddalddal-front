import React from "react";
import { styled } from "styled-components";
import MainCard from "./MainCard";

function MainCardList({ data, isLoading }) {
  return (
    <div>
      <MainCardListContainer>
        {data?.data.recipes.map((item) => {
          return <MainCard item={item} key={item.recipeId} isLoading={isLoading} />;
        })}
      </MainCardListContainer>
    </div>
  );
}

const MainCardListContainer = styled.div`
  width: 100%;
  margin-right: 15px;
  display: flex;
  flex-wrap: wrap;
`;

export default MainCardList;
