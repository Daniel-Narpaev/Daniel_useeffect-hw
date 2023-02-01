import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";


function LoginForm(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPasswod, setEnteredPasswod] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswodValid, setIsPasswodValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsEmailValid(
      enteredEmail.includes("@") && enteredPasswod.trim().length >= 5
    );
  };

  const passwodChangeHandler = (event) => {
    setEnteredPasswod(event.target.value);
    setIsPasswodValid(
      enteredPasswod.trim().length >= 5 && enteredEmail.includes("@")
    );
  };

  const validetEmailHandler = () => {
    setIsEmailValid(enteredEmail.includes("@"));
  };

  useEffect(() => {
    setIsFormValid(isEmailValid, isPasswodValid);
  }, [isEmailValid && isPasswodValid]);

  const submitHandler = (element) => {
    element.preventDefault();
    props.loginHandler();
  };

  return (
    <Conteiner>
      <Form>
        <Input
            title="E-Mail"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={validetEmailHandler}         
            />

        <Input
            title="Password"
            onChange={passwodChangeHandler}
            value={enteredPasswod}
            onBlur={validetEmailHandler}         
            />
        <Button
          backgroundColor={"backgroundColor"}
          disabled={!isFormValid}
          onClick={submitHandler}
        >Login</Button>
    </Form>
  </Conteiner>
  );
}
export default LoginForm;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 15px;
`;
const Conteiner = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  margin: 40px auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 600px;
  flex-wrap: wrap;
`;