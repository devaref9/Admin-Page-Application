import React, { useEffect, useState } from "react";
import { Container } from "../../assets/globalStyles";
import UserList from "../../features/users/components/UserList/index";
import { ReactComponent as AddIcon } from "../../assets/svgs/add.svg";

import {
  ButtonsWrapper,
  Content,
  AddBtn,
  HomePageStyle,
  SidebarStyle,
} from "./index.style";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SearchForm from "../../features/users/components/SearchForm/index";
import AllUsersCheckbox from "../../features/users/components/AllUsersCheckbox";
import DeleteSelectedUsers from "../../features/users/components/DeleteSelectedUsers";

const HomePage = () => {
  const userStatus = useSelector((state: any) => state.users.status);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userStatus === "loading" ? setIsLoading(true) : setIsLoading(false);
  }, [userStatus]);

  return (
    <HomePageStyle>
      <SidebarStyle>
        <SearchForm />
      </SidebarStyle>
      <Content>
        <Container>
          <ButtonsWrapper>
            <DeleteSelectedUsers />
            <AllUsersCheckbox />
          </ButtonsWrapper>
          {isLoading ? <LoadingSpinner /> : <UserList />}
        </Container>
      </Content>
      <Link to="/add">
        <AddBtn>
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
        </AddBtn>
      </Link>
    </HomePageStyle>
  );
};

export default HomePage;
