import React from "react";
import { MainLayout } from "../styles/layouts";
import { styled } from "styled-components";
import IngredientItem from "../components/IngredientItem";
import { useQuery } from "react-query";
import { getRecipeDetailPageApi } from "../api/users";
import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["recipeDetailData", id], () => getRecipeDetailPageApi(id));
  console.log(data);
  if (isLoading) return "Loading...";

  return (
    <MainLayout>
      {isLoading ? (
        <div></div>
      ) : (
        <div>
          <MainContainer>
            <ImageContainer></ImageContainer>
            <ContentContainer>
              <Title>{data.data.name}</Title>
              <Content>{data.data.explanation}</Content>
              <Alcohol>베이스 : {data.data.base} </Alcohol>
              <ZzimBtn>Pick !</ZzimBtn>
            </ContentContainer>
          </MainContainer>

          <RecipeContainer>
            <ExplainContainer>
              <TitleContainer>재료 정보</TitleContainer>
              <IngredientContainer>
                {/* 재료 items 배열로 받아와서 map으로 뿌릴것 */}
                {data.data.ingredientList.map((item) => {
                  return <IngredientItem item={item} key={item.recipeId} />;
                })}
              </IngredientContainer>
            </ExplainContainer>

            <ExplainContainer>
              <TitleContainer>레시피 설명</TitleContainer>
              <RecipeContent>
                {data.data.makingDetailList.map((item) => {
                  return <div>{item.making}</div>;
                })}
              </RecipeContent>
            </ExplainContainer>
          </RecipeContainer>
        </div>
      )}
    </MainLayout>
  );
};

const MainContainer = styled.div`
  width: 100%;
  padding: 50px 0 50px 0;
  background-color: rgb(48, 48, 48);
  display: flex;
  margin-top: 40px;
  justify-content: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  width: 350px;
  margin-top: 30px;
  margin-left: 50px;
  @media screen and (max-width: 900px) {
    margin-left: 0px;
  }
`;

const Title = styled.div`
  color: #ffff;
  font-size: 28px;
  font-weight: 900;
  font-family: "TTWanjudaedunsancheB";
  margin-bottom: 20px;
`;

const Content = styled.div`
  color: rgb(193, 193, 193);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  font-family: "TTWanjudaedunsancheB";
`;

const Alcohol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: rgb(162, 162, 162);
  font-weight: 900;
  font-size: 13px;
  width: 110px;
  height: 35px;
  border: 1.6px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 30px;
`;

const ZzimBtn = styled.div`
  color: #ffff;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  font-family: "GoryeongStrawberry";

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
  }

  &:active {
    height: 80px;
  }
`;

const RecipeContainer = styled.div`
  padding: 50px 100px 50px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ExplainContainer = styled.div``;

const TitleContainer = styled.div`
  font-size: 20px;
  font-family: "GoryeongStrawberry";
  margin-bottom: 20px;
`;

const IngredientContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 3px 8px 20px;
  padding: 50px 400px 50px 400px;
  margin-bottom: 30px;
  @media (max-width: 1189px) {
    padding: 50px 200px 50px 200px;
  }
  @media (max-width: 800px) {
    padding: 50px 100px 50px 100px;
  }
  @media (max-width: 400px) {
    padding: 50px 0 50px 0;
  }
`;

const RecipeContent = styled.div`
  align-items: center;
  line-height: 50px;
  font-family: "GoryeongStrawberry";
  box-shadow: rgba(0, 0, 0, 0.08) 3px 8px 20px;
  padding: 50px 150px 50px 150px;

  @media (max-width: 800px) {
    padding: 50px 50px 50px 50px;
  }
  @media (max-width: 400px) {
    padding: 50px 0 50px 0;
  }
`;

export default RecipeDetailPage;
