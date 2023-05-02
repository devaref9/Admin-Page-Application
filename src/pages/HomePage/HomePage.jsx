import React, { useEffect, useState } from "react";
import { Container } from "../../globalStyles";
import UserList from "../../containers/UserList/UserList";
import { ReactComponent as AddIcon } from "../../assets/svgs/add.svg";
import {
  deleteUser,
  getFilteredUsers,
  updateSelectedUsersId,
} from "../../features/users";

import {
  HoemPageSelectAndDelete,
  HomeContent,
  HomePageAddBtn,
  HomePageStyle,
} from "./HomePage.style";
import Button from "../../components/Button/Button";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BsFillTrashFill } from "react-icons/bs";

const HomePage = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const selectedUsersId = useSelector((state) => state.users.selectedUsersId);
  const userStatus = useSelector((state) => state.users.status);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const filteredUsers = useSelector((state) => getFilteredUsers(state));

  const handleDeleteUsers = () => {
    selectedUsersId.forEach((id) => {
      const currentUser = users.find((user) => user.id === id);
      dispatch(deleteUser({ ...currentUser }));
    });
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

  return (
    <HomePageStyle>
      <Sidebar />
      <HomeContent>
        <Container>
          <HoemPageSelectAndDelete>
            <Button className="danger" onClick={handleDeleteUsers}>
              <BsFillTrashFill />
              <span style={{ marginLeft: "5px" }}>Delete Selected</span>
            </Button>
            <Button className="primary">
              <CheckboxInput
                id="selectAll"
                handleChange={handleSelectAllUsers}
                isChecked={isChecked}
              />
              <label
                htmlFor="selectAll"
                style={{ marginLeft: "5px", cursor: "pointer" }}
              >
                Select All
              </label>
            </Button>
          </HoemPageSelectAndDelete>
          {isLoading ? <LoadingSpinner /> : <UserList users={filteredUsers} />}
        </Container>
      </HomeContent>
      <Link to="/add">
        <HomePageAddBtn>
          <Button
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#9BA4B5",
              boxShadow: "0px 17px 10px -10px rgba(0, 0, 0, 0.4)",
              transition: "all ease-in-out 300ms",
            }}
            className="circle"
          >
            <AddIcon />
          </Button>
        </HomePageAddBtn>
      </Link>
    </HomePageStyle>
  );
};

export default HomePage;
