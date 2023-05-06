import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../usersSlice";
import Button from "../../../../components/Button/Button";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteSelectedUsers = () => {
  const users = useSelector((state) => state.users.value);
  const selectedUsersId = useSelector((state) => state.users.selectedUsersId);
  const dispatch = useDispatch();

  const handleDeleteUsers = () => {
    selectedUsersId.forEach((id) => {
      const currentUser = users.find((user) => user.id === id);
      dispatch(deleteUser({ ...currentUser }));
    });
  };
  return (
    <Button className="danger" onClick={handleDeleteUsers}>
      <BsFillTrashFill />
      <span style={{ marginLeft: "5px" }}>Delete Selected</span>
    </Button>
  );
};

export default DeleteSelectedUsers;
