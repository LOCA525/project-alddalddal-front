import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Banner = () => {
  const [bannerWidth, setBannerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setBannerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BannerContainer>
      <ImageWrapper>
        <Image src="https://www.masileng.com/images/illust_challenge_left.png" alt="Left Image" />
      </ImageWrapper>
      <TextWrapper>
        <div>
          당신의 칵테일 메이트. <br></br>알딸딸
        </div>
      </TextWrapper>
      <ImageWrapper>
        <Image src="https://www.masileng.com/images/illust_challenge_right.png" alt="Right Image" />
      </ImageWrapper>
    </BannerContainer>
  );
};
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe569;
  cursor: default;
  margin-top: 8px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "PartialSansKR-Regular";
  color: #f79327;
  @media screen and (max-width: 1000px) {
    font-size: 25px;
  }
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
  font-size: 30px;
`;

export default Banner;
