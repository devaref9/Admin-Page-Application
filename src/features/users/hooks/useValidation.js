import * as yup from "yup";

const userValidation =  {
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
};


export const schema = yup.object().shape(userValidation).required();