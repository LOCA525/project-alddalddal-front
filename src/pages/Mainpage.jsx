import Banner from "../components/MainPage/Banner";
import { MainLayout, TitleLayout } from "../styles/layouts";
import { styled } from "styled-components";
import { getMainApi } from "../api/users";
import { useQuery } from "react-query";
import MainCardList from "../components/MainPage/MainCardList";
import MainCommentList from "../components/MainPage/MainCommentList";
const MainPage = () => {
  const { isLoading, error, data } = useQuery("mainPageData", getMainApi);

  if (isLoading) return "Loading...";
  console.log(error);

  return (
    // Hot 레시피카드는 6개까지만 띄울것 !
    // 라운지 게시글 컨테이너는 현재 max-height 700px 걸려있고 이상일시 스크롤 이벤트 걸려있음!.

    <div>
      <MainLayout>
        <Banner />
        <ContentContainer>
          <PopularListContainer>
            <TitleLayout>🔥 Hot 레시피</TitleLayout>
            <MainCardList data={data} isLoading={isLoading} />
          </PopularListContainer>
          <LoungeContainer>
            <TitleLayout>☕️ 라운지</TitleLayout>
            <MainCommentList />
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
