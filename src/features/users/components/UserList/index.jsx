import React from "react";
import UserCard from "../UserCard";
import { UserListStyle } from "./index.style";
import { useSelector } from "react-redux";
import { getFilteredUsers } from "../../usersSlice";

const UserList = () => {
  const users = useSelector((state) => getFilteredUsers(state));

  return (
    <UserListStyle>
      {users.map((user, index) => {
        return <UserCard user={user} key={index} />;
      })}
    </UserListStyle>
  );
};

export default UserList;
