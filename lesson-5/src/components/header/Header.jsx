import React from "react";
import NavButton from "../navButton/NavButton";
import styled from "styled-components";


function Header({ isLoggedIn, userHandler, logoutHandler, timerHandler }) {
  return (
    <HeaderContainer>
      <NavigationBar>
        <HeaderTitle>A Typical Page</HeaderTitle>
        {isLoggedIn ? (
          <NavButton
            userHandler={userHandler}
            logoutHandler={logoutHandler}
            isLoggedIn={isLoggedIn}
            timerHandler={timerHandler}
          />
        ) : null}
      </NavigationBar>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer= styled.header`
  background-color: #700170;
  width: 100vw;
  padding: 18px 26px;
`;

const HeaderTitle = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 0;
`;

const NavigationBar = styled.nav`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;