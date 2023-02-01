import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import LoginForm from "./components/loginForm/LoginForm";
import Timer from "./components/timer/Timer";
import Users from "./components/users/Users";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [isTimer, setIsTimer] = useState(false);

  const loginChangeHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
    localStorage.setItem("AUTH", JSON.stringify(true));
  };

  useEffect(() => {
    const result = localStorage.getItem("AUTH");
    setIsLoggedIn(!!result);
  }, []);
  /////////////////////////////
  const logoutChangeHandler = () => {
    setIsLoggedIn(false);
    setIsTimer(false);
  };
  ////////////////////////////
  const timerChangeHandler = () => {
    setIsUsers(false);
    setIsTimer(true);
  };
  ////////////////////////////
  const userChangeHandler = () => {
    setIsUsers(true);
    setIsTimer(false);
  };
///////////////////////////////////////////////////
  const login = !isUsers && !isTimer && isLoggedIn;
  const showUsers = isUsers && isLoggedIn;
  const showTimer = isTimer && isLoggedIn;

////////////////////////////////////////////////////
  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        logoutHandler={logoutChangeHandler}
        timerHandler={timerChangeHandler}
        userHandler={userChangeHandler}
      />
      <main>
          {!isLoggedIn && <LoginForm loginHandler={loginChangeHandler} />}
          {login && <Users />}
          {showUsers && <Users />}
          {showTimer && <Timer />}
      </main>
    </div>
  );
}

export default App;
