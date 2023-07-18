import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { postSignUpApi } from "../api/users";

const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate(`/recipe/detail/${item.recipeId}`);
      }}
    >
      <CardImageContainer></CardImageContainer>
      <CardContentContainer>
        <TitleContainer>{item?.name}</TitleContainer>
        <ContentContainer>{item?.explanation}</ContentContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 300px;
  height: 290px;
  cursor: pointer;
  /* &:hover {
    height: 291px;
  } */
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 230px;
  border-radius: 20px;
  border: 1px solid gray;
`;

const CardContentContainer = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 900;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ContentContainer = styled.div`
  color: #838383;
  font-size: 12px;
  font-weight: bold;
`;
export default Card;
