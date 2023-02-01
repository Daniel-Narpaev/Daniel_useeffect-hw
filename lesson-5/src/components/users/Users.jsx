import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Users() {
  const [isUser, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <CardBox>
      <UsersCardDivConteiner>
        <h1>Users!</h1>
        <UlUsers>
          {isUser.map((user) => (
            <UlUsersLi key={user.id}>
              <UserConteiner>
                <p>{user.username}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </UserConteiner>
            </UlUsersLi>
          ))}
        </UlUsers>
      </UsersCardDivConteiner>
    </CardBox>
  );
}

export default Users;

const CardBox = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  margin: 40px auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 1000px;
`;

const UsersCardDivConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  h1{
    font-size: 3.4rem;
    margin: 0;
    };
  
`;

const UlUsers = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: -40px;
`;

const UlUsersLi = styled.li`
  list-style: none;
  font-size: 1.1rem;
  font-weight: bold;
`;

const UserConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  padding: 10px;
  border-radius: 10px;
  width: 250px;
`;
