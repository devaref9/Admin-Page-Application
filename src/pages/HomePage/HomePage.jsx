import React, { useEffect, useState } from "react";
import { Container } from "../../globalStyles";
import SearchForm from "../../components/SearchForm/SearchForm";
import UserList from "../../containers/UserList/UserList";
import { ReactComponent as AddIcon } from "../../assets/svgs/add.svg";
import TrashCan from "../../assets/svgs/trash-can.svg";
import {
  deleteSelectedUsers,
  updateSelectedUsersId,
} from "../../features/users";

import {
  HoemPageSelectAndDelete,
  HomePageBtn,
  HomePageStyle,
} from "./HomePage.style";
import Button from "../../components/Button/Button";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const HomePage = () => {
  const users = useSelector((state) => state.users.value);
  const selectedUsersId = useSelector((state) => state.users.selectedUsersId);
  const userStatus = useSelector((state) => state.users.status);
  const [serachKey, setSearchKey] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteUsers = () => {
    dispatch(deleteSelectedUsers());
    setIsChecked(false);
  };

  const handleSelectAllUsers = () => {
    dispatch(
      updateSelectedUsersId({
        type: !isChecked ? "SELECT_ALL" : "DESELECT_ALL",
      })
    );
    setIsChecked((prev) => !prev);
  };

  // If All UserCards is selected then Select/Deselect checkbox changes.
  useEffect(() => {
    setIsChecked(
      users.length > 0 && users.length === selectedUsersId.length ? true : false
    );
  }, [users, selectedUsersId]);

  useEffect(() => {
    userStatus === "loading" ? setIsLoading(true) : setIsLoading(false);
  }, [userStatus]);

  useEffect(() => {
    const filterUsers = (key) => {
      const filteredUsers = [];

      users.forEach((user) => {
        if (user.name.toLowerCase().includes(key.toLowerCase())) {
          filteredUsers.push(user);
        }
      });
      const unSelectedUsers = filteredUsers.filter((user) => {
        return selectedUsersId.indexOf(user.id) === -1;
      });
      const selectedUsers = selectedUsersId
        ? users.filter((user) => {
            return selectedUsersId.indexOf(user.id) !== -1;
          })
        : [];

      return [...selectedUsers, ...unSelectedUsers];
    };
    setFilteredUsers(filterUsers(serachKey));
  }, [serachKey, users, selectedUsersId]);

  return (
    <HomePageStyle>
      <Container>
        <SearchForm setSearchKey={setSearchKey} />
        <HoemPageSelectAndDelete>
          <img onClick={handleDeleteUsers} src={TrashCan} alt="delete" />
          <CheckboxInput
            isChecked={isChecked}
            handleChange={handleSelectAllUsers}
          />
        </HoemPageSelectAndDelete>
        {isLoading ? <LoadingSpinner /> : <UserList users={filteredUsers} />}
        <Link to="/add">
          <HomePageBtn>
            <Button className="primary circle">
              <AddIcon />
            </Button>
          </HomePageBtn>
        </Link>
      </Container>
    </HomePageStyle>
  );
};

export default HomePage;
