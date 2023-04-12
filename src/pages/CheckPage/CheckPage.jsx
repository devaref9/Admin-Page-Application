import React, { useState } from "react";
import { CheckPageButtons, CheckPageStyle } from "./CheckPage.style";
import UserInformationDetails from "../../containers/UserInformationDetails/UserInformationDetails";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { Container } from "../../globalStyles";
import { addUser, updateCheck } from "../../features/users";

const CheckPage = () => {
  let { userId } = useParams();
  const users = useSelector((state) => state.users.value);
  const currentUser = users.find((user) => user.id.value === userId);
  const [submitCount, setSubmitCount] = useState(0);
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount((prev) => prev + 1);
    dispatch(addUser(newUser));
    dispatch(updateCheck(newUser));
    navigate("/");
  };

  return (
    <CheckPageStyle>
      <UserInformationDetails
        setNewUser={setNewUser}
        submitState={submitCount}
        user={currentUser}
      />
      <Container>
        <CheckPageButtons>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="danger"
          >
            back
          </Button>
          <Button onClick={handleSubmit} className="primary">
            save
          </Button>
        </CheckPageButtons>
      </Container>
    </CheckPageStyle>
  );
};

export default CheckPage;
