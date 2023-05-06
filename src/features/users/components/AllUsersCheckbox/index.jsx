import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import CheckboxInput from "../../../../components/CheckboxInput/CheckboxInput";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedUsersId } from "../../usersSlice";

const AllUsersCheckbox = () => {
  const users = useSelector((state) => state.users.value);
  const selectedUsersId = useSelector((state) => state.users.selectedUsersId);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  // If All UserCards is selected then Select/Deselect checkbox changes.
  useEffect(() => {
    setIsChecked(
      users.length > 0 && users.length === selectedUsersId.length ? true : false
    );
  }, [users, selectedUsersId]);

  const handleSelectAllUsers = () => {
    dispatch(
      updateSelectedUsersId({
        type: !isChecked ? "SELECT_ALL" : "DESELECT_ALL",
      })
    );
    setIsChecked((prev) => !prev);
  };

  return (
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
  );
};

export default AllUsersCheckbox;
