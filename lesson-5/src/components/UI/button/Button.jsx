import React from "react";
import styled from "styled-components";

function Button({ children, backgroundColor, disabled, onClick, ...rest }) {
  return (
    <ButtonLogin
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ButtonLogin>
  );
}

const getPadding =(props)=>{
  return props.padding ? "10px 20px" : "10px 40px";
}
const getBackgroundColor = (props)=>{
  return props.backgroundColor ? "#700170" : "#d900d9"
}
const getHoverBackgroundColor = (props)=>{
  return props.backgroundColor ? "#8e028e" : "#ff28ffeb"
}

export default Button;

const ButtonLogin = styled.button`
  background-color: ${getBackgroundColor};
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  padding: ${getPadding};
  transition: 0.2s;
  font-size: 1.2rem;

  :disabled {
    background-color: #bcbcbcb5;
  }

  &:hover {
    background-color: ${getHoverBackgroundColor};

    :disabled {
      background-color: #bcbcbcb5;
    }
  }

  &:active {
    background-color: ${getBackgroundColor};

    :disabled {
      background-color: #bcbcbcb5;
    }
  }
`;
