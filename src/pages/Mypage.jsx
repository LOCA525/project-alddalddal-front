import React from 'react'
import { MainLayout, TitleLayout } from '../styles/layouts'
import { styled } from 'styled-components';
import CommentCard from '../components/CommentCard';
import Card from '../components/Card';

function Mypage() {
    return (
        <MainLayout>
            <MypageContainer>
                <MypageTitleContainer>
                    <TitleLayout>내 정보</TitleLayout>
                </MypageTitleContainer>
                <ImpomationContainer>
                    <MyprofilContainer>
                        My 프로필
                    </MyprofilContainer>
                    <EmailTextContainer>
                        <h4>📧 *******@*****.***</h4>
                    </EmailTextContainer>
                    <NickNameTextContainer>
                        <h4>🙍‍♂️🙍 닉네임</h4>
                        <ModifyBtn>수정</ModifyBtn>
                    </NickNameTextContainer>
                </ImpomationContainer>
                <MypageTitleContainer>
                    <TitleLayout>내가 남긴 메세지</TitleLayout>
                </MypageTitleContainer>
                <ImpomationContainer>
                    <CommentListContainer>
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </CommentListContainer>
                </ImpomationContainer>
                <MypageTitleContainer>
                    <TitleLayout>나의 찜 목록</TitleLayout>
                </MypageTitleContainer>
                <ImpomationContainer>
                    <CardListContainer>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </CardListContainer>
                </ImpomationContainer>
            </MypageContainer>
        </MainLayout>
    )
}

const MypageContainer = styled.div`
    margin-top: 20px;
`;

const MypageTitleContainer = styled.div`
    display: flex;
  width: 1000px;
  margin: 80px auto 0px auto;
`;

const ImpomationContainer = styled.div`
  width: 1000px;
  margin: 0px auto 50px auto;
  border-radius: 10px;
  max-height: 600px;
  justify-content: center;
  box-shadow: rgba(150, 150, 150, 0.45) 2px 2px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MyprofilContainer = styled.div`
    width: 1000px;
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
    width: 960px;
    height: 60px;
    margin: 0px auto;
    border-bottom: 1px solid rgba(194, 194, 194, 0.45);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NickNameTextContainer = styled.div`
    width: 960px;
    height: 60px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ModifyBtn = styled.button`
    width: 80px;
    height: 30px;
    color: white;
    font-weight: bolder;
    background-color: #f79327;
    border-radius: 8px;
    &:hover {
        background-color: #ca6b34;
        cursor: pointer;
    };
    &:active {
        height: 31px;
    };
`;

const CommentListContainer = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  border: 2px solid #f79327;
  border-radius: 10px;
  padding: 16px;
  max-height: 700px;
  overflow-y: scroll;
`;

const CardListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 20px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  align-items: center;
  align-items: stretch;
  align-content: center;
  overflow-y: scroll;
`;

export default Mypage