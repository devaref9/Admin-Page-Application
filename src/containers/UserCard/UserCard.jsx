import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { updateSingleUserSelected } from "../../features/users";
import {
  BottomButtons,
  TopButtons,
  UserCardImg,
  UserCardStyle,
  UserContent,
  UserInfo,
} from "./UserCard.style";
import RedTag from "../../assets/svgs/red-tag.svg";
import GreenTag from "../../assets/svgs/green-tag.svg";
import { BiPencil } from "react-icons/bi";
import Button from "../../components/Button/Button";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const UserCard = ({ user }) => {
  const selectedUsersId = useSelector((state) => state.users.selectedUsersId);
  const photos = useSelector((state) => state.photos.value);
  const [userPhoto, setUserPhoto] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
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
    <UserCardStyle
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          stiffness: 85,
          restDelta: 0.0007,
        },
      }}
      bg={!darkmode ? "#e3e3e3" : ""}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {userPhoto ? <UserCardImg src={userPhoto} /> : <LoadingSpinner />}
      </div>
      <UserContent>
        <UserInfo>
          <table>
            <tbody>
              <tr>
                <td>Full Name:</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>ID No:</td>
                <td>{user.id}</td>
              </tr>
            </tbody>
          </table>
          <img src={isChecked ? GreenTag : RedTag} alt="checked tag" />
        </UserInfo>
      </UserContent>

      <TopButtons>
        <Link to={`/edit/${user.id}`}>
          <BiPencil />
        </Link>
        <CheckboxInput isChecked={isSelected} handleChange={handleSelect} />
      </TopButtons>
      <Link to={`/check/${user.id}`}>
        <BottomButtons>
          <Button className="primary">check</Button>
        </BottomButtons>
      </Link>
    </UserCardStyle>
  );
};

export default UserCard;
