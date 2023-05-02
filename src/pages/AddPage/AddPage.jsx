import React, { useState } from "react";
import UserInformationInputs from "../../containers/UserInformationInputs/UserInformationInputs";
import { AddPageButtons, AddPageStyle } from "./AddPage.style";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../features/users";
import { useForm } from "react-hook-form";
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
    image: yup.mixed().test("required", "required field.", (file) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (file.length > 0) return true;
      return false;
    }),
  })
  .required();

const AddPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();

  let inputFile = watch(["image"]);
  const [filePreview] = useFilePreview(inputFile[0]);

  const onSubmit = async (data) => {
    try {
      setAddRequestStatus("pending");
      dispatch(addNewUser({ ...data }));
    } catch (err) {
      console.error("Failed to save!", err);
    } finally {
      setAddRequestStatus("idle");
    }
    navigate("/");
  };

  return (
    <AddPageStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInformationInputs
          register={register}
          errors={errors}
          imgSrc={filePreview}
        />
        <AddPageButtons>
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
            Add User
          </Button>
        </AddPageButtons>
      </form>
    </AddPageStyle>
  );
};

export default AddPage;
