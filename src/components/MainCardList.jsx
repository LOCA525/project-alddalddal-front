import React from 'react'
import { styled } from 'styled-components';
import MainCard from './MainCard';

function MainCardList({ data }) {
  return (
    <MainCardListContainer>
        {data?.data.recipes.map((item) => {
            return <MainCard item={item} key={item.recipeId} />;
        })}
    </MainCardListContainer>
  )
}

const MainCardListContainer = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  margin-right: 15px;
  /* border: 2px solid #f79327;
  border-radius: 10px; */
  padding: 16px;
  max-height: 700px;
  display: flex;
  flex-wrap: wrap;
`;

export default MainCardList