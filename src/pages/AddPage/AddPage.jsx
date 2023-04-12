import React, { useEffect, useState } from "react";
import UserInformationInputs from "../../containers/UserInformationInputs/UserInformationInputs";
import { Container } from "../../globalStyles";
import { AddPageButtons, AddPageStyle } from "./AddPage.style";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/users";

const AddPage = () => {
  const navigate = useNavigate();
  let { userId } = useParams();
  const users = useSelector((state) => state.users.value);
  console.log("users", users);
  const [newUser, setNewUser] = useState({});
  const [existedUser, setExistedUser] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount((prev) => prev + 1);
    dispatch(addUser(newUser));
    navigate("/");
  };

  // if user was existed set ExistedUser to use AddPage for editing user information
  useEffect(() => {
    if (userId) {
      setExistedUser(users.find((user) => user.id.value === userId));
    } else setExistedUser(null);
  }, [userId, users]);

  return (
    <AddPageStyle>
      <Container>
        <UserInformationInputs
          submitState={submitCount}
          setNewUser={setNewUser}
          user={existedUser}
        />
        <AddPageButtons>
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
        </AddPageButtons>
      </Container>
    </AddPageStyle>
  );
};

export default AddPage;
