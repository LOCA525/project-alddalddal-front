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
    z-index: 30;
    border-left: 1px solid #8a8a8a;
    border-right: 1px solid #8a8a8a;
    border-bottom: 1px solid #8a8a8a;
    border-radius: 8px;
    background-color: white;
    width: 300px;
    height: auto;
    position: absolute;
`;

const SelectOption = styled.div`
    font-size: 12px;
    width: 300px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    height: 40px;

    &:hover {
        background-color: #eee;
    }

    &:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    &:last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
`;

export { SelectedOption }