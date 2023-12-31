import React from "react";
import { MainLayout } from "../styles/layouts";
import CardList from "../components/RecipeListPage/CardList";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import { getRecipePageApi } from "../api/users";

const RecipeListPage = () => {
  const { isLoading, error, data } = useQuery("recipeData", getRecipePageApi);

  if (isLoading) return "Loading...";
  return (
    <MainLayout>
      <FilterBtnContainer></FilterBtnContainer>
      <CardList data={data} />
    </MainLayout>
  );
};

const FilterBtnContainer = styled.div`
  margin-top: 30px;
`;

export default RecipeListPage;
