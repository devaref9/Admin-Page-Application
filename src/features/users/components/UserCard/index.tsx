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
import { AppDispatch, RootState } from "../../../../store";

type UserCardPropTypes = {
  user: any;
};

const UserCard = ({ user }: UserCardPropTypes) => {
  const selectedUsersId = useSelector(
    (state: RootState) => state.users.selectedUsersId
  );
  const photos = useSelector((state: RootState) => state.photos.value);
  const [userPhoto, setUserPhoto] = useState(null);
  const [isSelected, SetIsSelected] = useState<boolean>(
    selectedUsersId ? selectedUsersId.includes(user.id) : false
  );
  const dispatch: AppDispatch = useDispatch();

  const handleSelect = () => {
    dispatch(updateSingleUserSelected({id: user.id}));
  };

  useEffect(() => {
    SetIsSelected(selectedUsersId ? selectedUsersId.includes(user.id) : false);
  }, [selectedUsersId, user]);

  useEffect(() => {
    if (user.image && user.image.length > 0) {
      setUserPhoto(user.image);
    } else {
      let [userPhoto]: any = photos.filter(
        (photo: any) => photo?.id === user.id
      );
      userPhoto && setUserPhoto(userPhoto?.thumbnailUrl);
    }
  }, [photos, user.id, user.image, user]);

  return (
    <UserCardStyle>
      <Content>
        <UserImg src={userPhoto ? userPhoto : ""} />
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
