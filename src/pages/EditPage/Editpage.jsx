import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Container } from "../../globalStyles";
import { EditPageButtons, EditPageStyle } from "./EditPage.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UserInformationInputs from "../../containers/UserInformationInputs/UserInformationInputs";
import Button from "../../components/Button/Button";
import { getUserById, updateUser } from "../../features/users";
import { getPhotoById } from "../../features/photos";
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
    image: yup
      .mixed()
      .test("required", "Image is a required field.", (file) => {
        // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
        if (file.length > 0) return true;
        return false;
      }),
  })
  .required();

const Editpage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => getUserById(state, Number(userId)));
  const photo = useSelector((state) => getPhotoById(state, Number(userId)));

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let inputFile = watch(["image"]);
  const [filePreview] = useFilePreview(inputFile[0]);

  const onSubmit = async (data) => {
    try {
      dispatch(updateUser({ id: userId, ...data }));
    } catch (err) {
      console.error("Failed to save!", err);
    } finally {
    }
    navigate("/");
  };

  //TODO: useMemo ??? Work on optimization
  useEffect(() => {
    if (user) {
      const { name, phone, email } = user;
      let InitialValues = {};
      InitialValues.name = name;
      InitialValues.phone = phone;
      InitialValues.email = email;
      reset({ ...InitialValues });
    }
  }, [user, reset]);

  return (
    <EditPageStyle
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserInformationInputs
            register={register}
            errors={errors}
            userId={userId}
            imgSrc={filePreview ? filePreview : photo && photo.url}
          />
          <EditPageButtons>
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              className="danger"
            >
              back
            </Button>
            <Button type="submit" className="primary">
              save
            </Button>
          </EditPageButtons>
        </form>
      </Container>
    </EditPageStyle>
  );
};

export default Editpage;
