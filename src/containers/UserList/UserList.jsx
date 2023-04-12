import React from "react";
import UserCard from "../UserCard/UserCard";
import { UserListStyle } from "./UserList.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../features/photos";

const UserList = ({ users }) => {
  const photosStatus = useSelector((state) => state.photos.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (photosStatus === "idle") {
      dispatch(fetchPhotos());
    }
  }, [photosStatus, dispatch]);
  return (
    <UserListStyle>
      {users.map((user, index) => {
        return <UserCard user={user} key={index} />;
      })}
    </UserListStyle>
  );
};

export default UserList;
