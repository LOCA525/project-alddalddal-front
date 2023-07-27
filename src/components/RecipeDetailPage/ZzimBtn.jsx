import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { deleteZzimApi, postZzimApi } from "../../api/users";
import { useNavigate } from "react-router-dom";
const ZzimBtn = ({ data }) => {
  const isLogin = JSON.parse(localStorage.getItem("user")).islogin;
  const isUserZzim = data.data.isUserZzim;
  const id = data.data.recipeId;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const zzimMutate = useMutation(postZzimApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("recipeDetailData");
      console.log("찜성공!");
    },
  });
  const deleteZzimMutate = useMutation(deleteZzimApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("recipeDetailData");
      console.log("찜취소성공");
    },
  });
  const handleZzimPost = () => {
    const url = "recipes";
    zzimMutate.mutate(url, id);
  };
  const handleZzimDelete = () => {
    deleteZzimMutate.mutate(id);
  };
  return (
    <div>
      {isLogin ? (
        // 로그인한 상태의 찜버튼
        isUserZzim ? (
          <ZzimBtnContainer check={isUserZzim} onClick={handleZzimDelete}>
            찜완료
          </ZzimBtnContainer>
        ) : (
          <ZzimBtnContainer check={isUserZzim} onClick={handleZzimPost}>
            찜하기
          </ZzimBtnContainer>
        )
      ) : (
        // 로그인안한 상태의 찜버튼
        <ZzimBtnContainer
          check={isUserZzim}
          onClick={() => {
            navigate("/login");
          }}
        >
          Pick !
        </ZzimBtnContainer>
      )}
    </div>
  );
};

const ZzimBtnContainer = styled.div`
  color: #ffff;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  cursor: pointer;
  font-family: "GoryeongStrawberry";
  background-color: ${(props) => {
    return props.check ? "red" : "rgba(255, 255, 255, 0.1)";
  }};
  &:hover {
    transition: all 0.3s;
    background-color: ${(props) => {
      return props.check ? "#F05650" : "rgba(255, 255, 255, 0.2)";
    }};
  }

  &:active {
    height: 80px;
  }
`;

export default ZzimBtn;
