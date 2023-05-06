import React, { useCallback, useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import UserInputsList from "../UserInputsList/index";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, getUserById, updateUser } from "../../usersSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFilePreview from "../../hooks/useFilePreview";
import { ButtonsWrapper } from "./index.style";
import { schema } from "../../hooks/useValidation";

const UserForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { userId } = useParams();
  const user = useSelector((state) => getUserById(state, Number(userId)));

  const resetForm = useCallback(() => {
    if (user) {
      const { name, phone, email } = user;
      let InitialValues = {};
      InitialValues.name = name;
      InitialValues.phone = phone;
      InitialValues.email = email;
      reset({ ...InitialValues });
    }
  }, [reset, user]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();

  let inputFile = watch(["image"]);
  const [filePreview] = useFilePreview(inputFile[0]);

  const onSubmit = async (data) => {
    try {
      if (user) {
        dispatch(updateUser({ id: userId, ...data }));
      } else {
        setAddRequestStatus("pending");
        dispatch(addNewUser({ ...data }));
      }
    } catch (err) {
      console.error("Failed to save!", err);
    } finally {
      setAddRequestStatus("idle");
    }
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UserInputsList
        register={register}
        errors={errors}
        imgSrc={filePreview}
      />
      <ButtonsWrapper>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="danger"
        >
          Discard
        </Button>
        <Button type="submit" className="primary">
          {user ? "Save Changes" : "Add User"}
        </Button>
      </ButtonsWrapper>
    </form>
  );
};

export default UserForm;
