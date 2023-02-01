import React from 'react'
import styled from "styled-components";

const Input = ({ title, onChange, value, onBlur}) => {
  return (
    <StyledConteiner>
          <Label>{title}</Label>
          <Inputs
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        </StyledConteiner>
  )
}

export default Input

const StyledConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
font-weight: bold;
color: black;
font-size: 1.2rem;
`;
const Inputs = styled.input`
  border-radius: 5px;
  padding: 6px;
  outline: none;
  width: 400px;
  border: none;
  font-size: 1.2rem;

  background-color: rgb(199, 213, 228, 0.584);
  border: 1px solid rgb(179, 179, 179);

  :disabled {
    background-color: rgb(255, 121, 235, 0.584);
    border: 1px solid red;
  }

  &:focus {
    background-color: white;
  }
`;
