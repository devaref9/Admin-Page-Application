import React from "react";
import { UserCheckButtonsStyle } from "./UserCheckButtons.style";
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";

const UserCheckButtons = ({ checked, setChecked }) => {
  return (
    <UserCheckButtonsStyle>
      <IoIosCloseCircle
        onClick={() => {
          setChecked(false);
        }}
        style={{ color: checked ? "" : "red" }}
      />
      <IoIosCheckmarkCircle
        onClick={() => setChecked(true)}
        style={{ color: checked ? "green" : "" }}
      />
    </UserCheckButtonsStyle>
  );
};

export default UserCheckButtons;
