import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { postSignUpApi } from "../api/users";

const Card = () => {
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate("/recipe/detail");
      }}
    >
      <CardImageContainer></CardImageContainer>
      <CardContentContainer>
        <TitleContainer>버진 피나콜라다</TitleContainer>
        <ContentContainer>피나 콜라다의 무알콜 버전입니다.</ContentContainer>
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
  background-color: red;
  border-radius: 20px;
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
