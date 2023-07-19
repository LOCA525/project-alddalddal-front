import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function MainCard({ item }) {
  const navigate = useNavigate();
  console.log(item);
  return (
    <MainCardContainer
      onClick={() => {
        navigate(`/recipe/detail/${item.recipeId}`);
      }}
    >
      <MainCardImageContainer>
        <Images src={item.imageUrl} alt="Error" />
      </MainCardImageContainer>
      <MainCardContentContainer>
        <MainTitleContainer>{item.name}</MainTitleContainer>
      </MainCardContentContainer>
    </MainCardContainer>
  );
}

const MainCardContainer = styled.div`
  width: 290px;
  height: 290px;
  background-color: #fff9eaeb;
  display: flex;
  margin: 15px;
  border-radius: 10px;
  display: grid;

  cursor: pointer;
`;

const MainCardImageContainer = styled.div`
  width: 100%;
  height: 230px;
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const MainTitleContainer = styled.div`
  font-size: 20px;
  font-weight: 900;
  display: flex;
  font-family: "GoryeongStrawberry";

`;

const MainCardContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default MainCard;
