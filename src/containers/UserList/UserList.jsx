import React from "react";
import UserCard from "../UserCard/UserCard";
import { UserListStyle } from "./UserList.style";

const UserList = ({ users }) => {
  return (
    <UserListStyle>
      {users.map((user, index) => {
        return <UserCard user={user} key={index} />;
      })}
    </UserListStyle>
  );
};

export default UserList;
