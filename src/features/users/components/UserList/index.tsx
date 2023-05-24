import React from "react";
import UserCard from "../UserCard";
import { UserListStyle } from "./index.style";
import { useSelector } from "react-redux";
import { User, getFilteredUsers } from "../../usersSlice";
import { RootState } from "../../../../store";

const UserList = () => {
  const users: User[] | null = useSelector((state: RootState) =>
    getFilteredUsers(state)
  );

  return (
    <UserListStyle>
      {users?.map((user, index) => {
        return <UserCard user={user} key={index} />;
      })}
    </UserListStyle>
  );
};

export default UserList;
