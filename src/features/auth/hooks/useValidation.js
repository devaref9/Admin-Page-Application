import * as yup from "yup";

const userValidation = {
  adminEmail: yup
    .string()
    .required("*Email Is Required!")
    .email("*Email is not valid!"),
  adminPassword: yup.string().required("*Password Is Required!"),
};

export const schema = yup.object().shape(userValidation).required();
