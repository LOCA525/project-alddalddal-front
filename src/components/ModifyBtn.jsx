import React, { useState } from 'react'
import { styled } from 'styled-components';
import ModifyModal from './ModifyModal';

function ModifyBtn() {

    const [modifyModal, setModifyModal] = useState(false);

    const onClickModifyBtnHandler = () => {
        return setModifyModal(true);
    };
    
  return (
    <div>
        <Btn onClick={onClickModifyBtnHandler}>변경</Btn>
        {(modifyModal === true)
        && <ModifyModal
                modifyModal={modifyModal}
                setModifyModal={setModifyModal} />}
    </div>
  )
}

const Btn = styled.button`
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

export default ModifyBtn