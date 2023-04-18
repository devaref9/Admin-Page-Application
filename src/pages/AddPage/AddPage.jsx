import React, { useEffect, useState } from "react";
import UserInformationInputs from "../../containers/UserInformationInputs/UserInformationInputs";
import { Container } from "../../globalStyles";
import { AddPageButtons, AddPageStyle } from "./AddPage.style";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, addUser } from "../../features/users";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFilePreview from "../../hooks/useFilePreview";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field."),
    email: yup
      .string()
      .required("Email is a required field.")
      .email("Email is not valid!"),
    phone: yup
      .string()
      .required("Phone number is a required field.")
      .matches(
        /^[0][0-9]{3}[0-9]{3}[0-9]{4}$/,
        "Number is not valid. Example: 09121234567"
      ),
    address: yup.string().required("Address is a required field."),
    image: yup
      .mixed()
      .test("required", "Image is a required field.", (file) => {
        // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
        if (file.length > 0) return true;
        return false;
      }),
  })
  .required();

const AddPage = () => {
  const navigate = useNavigate();
  let { userId } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const file = watch(["image"]);
  const [filePreview] = useFilePreview(file[0]);

  const onSubmit = async (data) => {
    data.image = filePreview;
    try {
      setAddRequestStatus("pending");
      dispatch(addNewUser(data));
    } catch (err) {
      console.error("Failed to save!", err);
    } finally {
      setAddRequestStatus("idle");
    }
    navigate("/");
  };

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  // const onSavePostCliked = (e) => {
  //   e.preventDefault();
  //   setSubmitCount((prev) => prev + 1);
  //   try {
  //     setAddRequestStatus("pending");
  //     dispatch(addNewUser(newUser));
  //   } catch (err) {
  //     console.error("Failed to save!", err);
  //   } finally {
  //     setAddRequestStatus("idle");
  //   }
  //   navigate("/");
  // };

  // if user was existed set ExistedUser to use AddPage for editing user information
  // useEffect(() => {
  //   if (userId) {
  //     setExistedUser(users.find((user) => user.id.value === userId));
  //   } else setExistedUser(null);
  // }, [userId, users]);

  return (
    <AddPageStyle>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserInformationInputs
            register={register}
            errors={errors}
            filePreview={filePreview}
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
            <Button
              type="submit"
              className="primary"
            >
              save
            </Button>
          </AddPageButtons>
        </form>
      </Container>
    </AddPageStyle>
  );
};

export default AddPage;
