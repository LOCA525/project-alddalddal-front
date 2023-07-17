import React from "react";
import { MainLayout } from "../styles/layouts";
import { styled } from "styled-components";
import IngredientItem from "../components/IngredientItem";

const RecipeDetailPage = () => {
  return (
    <MainLayout>
      <MainContainer>
        <ImageContainer></ImageContainer>
        <ContentContainer>
          <Title>셜리템플 Shirley Temple</Title>
          <Content>미국의 아역배우 셜리 템플을 위해 만들어진 심플하고 대중적인 무알콜 칵테일입니다.</Content>
          <Alcohol>도수 : 무알콜 </Alcohol>
          <ZzimBtn>Pick !</ZzimBtn>
        </ContentContainer>
      </MainContainer>

      <RecipeContainer>
        <ExplainContainer>
          <TitleContainer>재료 정보</TitleContainer>
          <IngredientContainer>
            {/* 재료 items 배열로 받아와서 map으로 뿌릴것 */}
            <IngredientItem />
            <IngredientItem />
            <IngredientItem />
          </IngredientContainer>
        </ExplainContainer>

        <ExplainContainer>
          <TitleContainer>레시피 설명</TitleContainer>
          <RecipeContent>
            1. 하이볼잔에 각얼음을 넣는다. 2. 얼음위에 소주와 토닉워터를 1:2의 비율로 붓는다.(토닉워터는 반드시 단맛이
            있는걸로!) 3. 레몬 슬라이스로 장식한다.(귀찮으면 레몬즙이나 라임즙을 대신 넣어도 좋음)
          </RecipeContent>
        </ExplainContainer>
      </RecipeContainer>
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
`;

const RecipeContent = styled.div`
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 3px 8px 20px;
  padding: 50px 150px 50px 150px;
`;

export default RecipeDetailPage;
