import React from "react";
import { styled } from "styled-components";

const IngredientItem = ({ item }) => {
  return (
    <IngredientItemContainer>
      <Name>{item?.name}</Name>
      <Amount>{item?.amount}</Amount>
    </IngredientItemContainer>
  );
};

const IngredientItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 900;
`;

const Amount = styled.div`
  font-family: "TTWanjudaedunsancheB";

  font-size: 20px;
  font-weight: 900;
`;
export default IngredientItem;
