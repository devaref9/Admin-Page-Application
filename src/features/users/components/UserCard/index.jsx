import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSingleUserSelected } from "../../usersSlice";
import {
  UserCardStyle,
  UserImg,
  Content,
  UserTitle,
  UserEmail,
  ButtonsWrapper,
} from "./index.style";
import { BsPencilSquare } from "react-icons/bs";
import CheckboxInput from "../../../../components/CheckboxInput/CheckboxInput";

const UserCard = ({ user }) => {
  const selectedUsersId = useSelector((state) => state.users.selectedUsersId);
  const photos = useSelector((state) => state.photos.value);
  const [userPhoto, setUserPhoto] = useState(null);
  const [isSelected, SetIsSelected] = useState(
    selectedUsersId.includes(user.id)
  );
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(updateSingleUserSelected({ id: user.id }));
  };

  useEffect(() => {
    SetIsSelected(selectedUsersId.includes(user.id));
  }, [selectedUsersId, user]);

  useEffect(() => {
    if (user.image && user.image.length > 0) {
      setUserPhoto(user.image);
    } else {
      let [userPhoto] = photos.filter((photo) => photo.id === user.id);
      userPhoto && setUserPhoto(userPhoto.thumbnailUrl);
    }
  }, [photos, user.id, user.image, user]);

  const darkmode = useSelector((state) => state.theme.darkmode);

  return (
    <UserCardStyle>
      <Content bg={!darkmode ? "#FCFFE7" : ""}>
        <UserImg src={userPhoto} />
        <UserTitle>{user.name}</UserTitle>
        <UserEmail>{user.email}</UserEmail>
      </Content>

      <ButtonsWrapper>
        <Link to={`/edit/${user.id}`}>
          <BsPencilSquare />
        </Link>
        <CheckboxInput isChecked={isSelected} handleChange={handleSelect} />
      </ButtonsWrapper>
    </UserCardStyle>
  );
};

export default UserCard;
