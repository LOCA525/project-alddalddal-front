import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { deleteLoungePageApi, getLoungePageApi, getUserInfoApi, postLoungePageApi } from "../../api/users";

const CommentCard = () => {
  // const { isLoading, error, data } = useQuery("userInfo", getUserInfoApi, {
  //   onSuccess: (data) => {
  //     localStorage.setItem("user", JSON.stringify({ name: data.data.nickname, islogin: data.data.flag }));
  //   },
  // });

  const localData = JSON.parse(localStorage.user);

  // console.log(localData)

  const onRemoveBtnHandler = async (id) => {
    console.log(id);
    try {
      const response = await deleteLoungePageApi(id);
      if (response.status === 200) {
        console.log("res", response);
        alert("삭제 완료!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, error, data } = useQuery("loungeData", getLoungePageApi);

  console.log(data);

  return (
    <CommentCardContainer>
      {data?.data.reverse().map((item) => {
        return (
          <CommentCardWrapper key={item.id}>
            <UserContainer>
              {item.nickname === localData.name ? (
                <MyComment>나의 의견</MyComment>
              ) : (
                <div>{item.nickname} 님의 의견</div>
              )}
              <div>
                종류 ▽ <BaseText>{item.base}</BaseText>
              </div>
            </UserContainer>
            <ContentContainer>
              <div>{item.content}</div>
              {item.nickname === localData.name && (
                <div>
                  <RemoveBtn
                    onClick={() => {
                      onRemoveBtnHandler(item.id);
                    }}
                  >
                    삭제
                  </RemoveBtn>
                </div>
              )}
            </ContentContainer>
          </CommentCardWrapper>
        );
      })}
    </CommentCardContainer>
  );
};

const CommentCardContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const CommentCardWrapper = styled.div`
  margin-bottom: 15px;
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

const MyComment = styled.div`
  color: green;
`;

const RemoveBtn = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  font-weight: bolder;
  background-color: #f79327;
  border-radius: 8px;
  &:hover {
    background-color: #ca6b34;
    cursor: pointer;
  }
  &:active {
    width: 81px;
  }
`;

const BaseText = styled.div`
  margin: 5px;
  padding-left: 20px;
  font-size: 80%;
  color: #0d5358;
  font-weight: bolder;
`;

export default CommentCard;
