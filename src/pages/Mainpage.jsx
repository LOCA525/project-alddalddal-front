import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { MainLayout, TitleLayout } from "../styles/layouts";
import { styled } from "styled-components";
import Card from "../components/Card";
import CardList from "../components/CardList";
import CommentList from "../components/CommentList";
import { getMainApi } from "../api/users";
import { useQuery } from "react-query";
import MainCardList from "../components/MainCardList";
const MainPage = () => {
  const { isLoading, error, data } = useQuery("myPageData", getMainApi);
  // 메인페이지 아직 서버 개발안됨
  // console.log(data);
  // useEffect(() => {
  //   const accessToken = sessionStorage.getItem("accessToken");
  //   if (accessToken === null) {
  //     localStorage.setItem("isLogin", JSON.stringify({ isLogin: false }));
  //   } else {
  //     localStorage.setItem("isLogin", JSON.stringify({ isLogin: true }));
  //   }
  // }, []);
  return (
    // Hot 레시피카드는 6개까지만 띄울것 !
    // 라운지 게시글 컨테이너는 현재 max-height 700px 걸려있고 이상일시 스크롤 이벤트 걸려있음!.

    <div>
      <MainLayout>
        <Banner />
        <ContentContainer>
          <PopularListContainer>
            <TitleLayout>🔥 Hot 레시피</TitleLayout>
            {/* <CardList /> */}
          </PopularListContainer>
          <LoungeContainer>
            <TitleLayout>☕️ 라운지</TitleLayout>
            {/* <CommentList /> */}
          </LoungeContainer>
        </ContentContainer>
      </MainLayout>
    </div>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const PopularListContainer = styled.div`
  width: 70%;
  margin-bottom: 30px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const LoungeContainer = styled.div`
  width: 30%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
export default MainPage;
