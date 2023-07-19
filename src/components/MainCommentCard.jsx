import React from 'react'
import { useQuery } from 'react-query';
import { getLoungePageApi } from '../api/users';
import { styled } from 'styled-components';

function MainCommentCard() {

    const { isLoading, error, data } = useQuery("loungeData", getLoungePageApi);

  return (
    <CommentCardContainer>
      {data?.data.reverse().map((item) => {
        return (
          <div key={item.id}>
            <UserContainer>
                <div>{item.nickname} 님의 의견</div>
                <div>
                    종류 ▽ <BaseText>{item.base}</BaseText>
                </div>
            </UserContainer>
            <ContentContainer>
              <div>{item.content}</div>             
            </ContentContainer>
          </div>
        );
      })}
    </CommentCardContainer>
  )
}

const CommentCardContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const UserContainer = styled.div`
  width: 100%;
  border-top: 1px solid #ced3d7;
  border-left: 1px solid #ced3d7;
  border-right: 1px solid #ced3d7;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 100%;
  border: 1px solid #ced3d7;
  padding: 20px;
  font-size: 15px;
  word-break: break-all;
  display: flex;
  justify-content: space-between;
`;

const BaseText = styled.div`
  margin: 5px;
  padding-left: 20px;
  font-size: 80%;
  color: #0d5358;
  font-weight: bolder;
`;

export default MainCommentCard