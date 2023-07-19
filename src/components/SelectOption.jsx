import React from 'react'
import { styled } from 'styled-components'

const SelectedOption = ({ option, setOption1, setSelectedOption }) => {

  return (
      <OverSelectOptionBox>
          {option.map((item) => {
              return (                    
                  <SelectOption
                      key={item.value}
                      onClick={() => {
                          setOption1(false);
                          setSelectedOption(item.name);
                      }}
                  >{item.name}</SelectOption>                    
              )
          })}
      </OverSelectOptionBox>
  )
}

const OverSelectOptionBox = styled.div`
    margin-top: 40px;
    z-index: 30;
    border: 1px solid #8a8a8a;
    border-radius: 8px;
    background-color: white;
    width: 200px;
    height: auto;
    position: absolute;

    @media screen and (max-width: 750px) {
        font-size: 80%;
        justify-content: center;
        width: 100px;
    } 
`;

const SelectOption = styled.div`
    color: black;
    font-size: 12px;
    width: 200px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    height: 40px;

    &:hover {
        font-size: 13px;
        font-weight: bolder;
        background-color: #eee;
        border-radius: 8px;
    }

    @media screen and (max-width: 750px) {
        justify-content: center;
        width: 100px;
    } 

    /* &:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    &:last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    } */
`;

export { SelectedOption }