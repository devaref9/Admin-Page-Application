import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import CheckboxInput from "../../../../components/CheckboxInput/CheckboxInput";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedUsersId } from "../../usersSlice";
import { AppDispatch, RootState } from "../../../../store";

const AllUsersCheckbox = () => {
  const users = useSelector((state: RootState) => state.users.value);
  const selectedUsersId = useSelector(
    (state: RootState) => state.users.selectedUsersId
  );
  const dispatch: AppDispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // If All UserCards is selected then Select/Deselect checkbox changes.
  useEffect(() => {
    setIsChecked(
      selectedUsersId && users?.length === selectedUsersId.length
        ? true
        : false
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
