import React from 'react'
import { styled } from 'styled-components';

function MainCard(item) {

    console.log(item.item)

  return (
    <MainCardContainer>
        <MainCardImageContainer>
            <Images src={item?.item.imageUrl} alt="Error" />
        </MainCardImageContainer>
        <MainCardContentContainer>
            <MainTitleContainer>{item?.item.name}</MainTitleContainer>
        </MainCardContentContainer>
    </MainCardContainer>
  )
}

const MainCardContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff9eaeb;
  display: flex;
  margin: 15px;
  border-radius: 10px;
  display: grid;
  
  
  cursor: pointer;
  &:hover {
    font-size: 17px;
    font-weight: bold;
    border: 3px solid #c08181eb;
  }
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

export default MainCard