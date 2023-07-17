import React from "react";
import { MainLayout } from "../styles/layouts";
import CardList from "../components/CardList";
import { styled } from "styled-components";

const RecipeListPage = () => {
  return (
    <MainLayout>
      <FilterBtnContainer></FilterBtnContainer>
      <CardList />
    </MainLayout>
  );
};

const FilterBtnContainer = styled.div`
  margin-top: 30px;
`;

export default RecipeListPage;
