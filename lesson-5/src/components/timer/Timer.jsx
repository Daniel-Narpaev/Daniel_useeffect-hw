import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Timer() {
  const [count, setCount] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((plus) => plus + 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (count >= 60) clearInterval(timer.current);
  }, [count]);

  return (
    <Container>
      <TimerContainer>
        <h1>Timer: {count}</h1>
      </TimerContainer>
    </Container>
  );
}

export default Timer;

const Container = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  margin: 40px auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 600px;
  flex-wrap: wrap;
`
const TimerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 4rem;
  }
`;
