import { MainLayout, TitleLayout } from "../styles/layouts";
import { styled } from "styled-components";
import Card from "../components/RecipeListPage/Card";
import ModifyBtn from "../components/MyPage/ModifyBtn";
import { getMyPage } from "../api/users";
import { useQuery } from "react-query";

function Mypage() {
  const { isLoading, error, data } = useQuery("myPageData", getMyPage);
  if (isLoading) return "Loading...";
  return (
    <MainLayout>
      <MypageContainer>
        <MypageTitleContainer>
          <TitleLayout>내 정보</TitleLayout>
        </MypageTitleContainer>
        <ImpomationContainer>
          <MyprofilContainer>My 프로필</MyprofilContainer>
          <EmailTextContainer>
            <h4>📧 {data.data.email}</h4>
          </EmailTextContainer>
          <NickNameTextContainer>
            <h4>🙍‍♂️🙍 {data.data.nickname}</h4>
            <ModifyBtn />
          </NickNameTextContainer>
        </ImpomationContainer>
        <MypageTitleContainer>
          <TitleLayout>나의 찜 목록</TitleLayout>
        </MypageTitleContainer>
        <CardImpomationContainer>
          <CardListContainer>
            {data?.data.zzimRecipes.map((item) => {
              return <Card item={item} key={item.recipeId} />;
            })}
          </CardListContainer>
        </CardImpomationContainer>
      </MypageContainer>
    </MainLayout>
  );
}

const MypageContainer = styled.div`
  width: 100%;
  display: flex;
  display: grid;
  margin-top: 20px;
`;

const MypageTitleContainer = styled.div`
  display: flex;
  width: 65%;
  margin: 80px auto 0px auto;
`;

const ImpomationContainer = styled.div`
  width: 65%;
  margin: 0px auto 50px auto;
  border-radius: 10px;
  max-height: 600px;
  justify-content: center;
  box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardImpomationContainer = styled.div`
  width: 65%;
  margin: 0px auto 50px auto;
  padding-top: 20px;
  border-radius: 10px;
  max-height: 600px;
  justify-content: center;
  box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MyprofilContainer = styled.div`
  width: 100%;
  height: 60px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #f79327;
  align-items: center;
  display: flex;
  padding: 0px 16px;
  color: white;
  font-family: "GoryeongStrawberry";
  font-size: 20px;
`;

const EmailTextContainer = styled.div`
  width: 95%;
  height: 60px;
  margin: 0px auto;
  border-bottom: 1px solid rgba(194, 194, 194, 0.45);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NickNameTextContainer = styled.div`
  width: 95%;
  height: 60px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 20px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  align-items: center;
  align-items: stretch;
  overflow-y: scroll;
`;

export default Mypage;
