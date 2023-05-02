import React from "react";
import {
  UserInformationInputsStyle,
  UserProfileInput,
  UserProfileLabel,
  UserProfilePic,
  UserInputFields,
  UserProfileError,
} from "./UserInformationInputs.style";
import NoImg from "../../assets/images/no-image.png";
import InputGroup from "../../components/InputGroup/InputGroup";

const UserInformationInputs = ({ register, errors, imgSrc = null }) => {
  return (
    <UserInformationInputsStyle>
      <UserProfileLabel htmlFor="image">
        <UserProfilePic>
          <img
            htmlFor="photo-upload"
            src={imgSrc ? imgSrc : NoImg}
            alt="preview"
          />
        </UserProfilePic>
        <UserProfileInput id="image" type="file" {...register("image")} />
        {errors.image && (
          <UserProfileError>{`* ${errors.image.message}`}</UserProfileError>
        )}
      </UserProfileLabel>

      <UserInputFields>
        <InputGroup
          label="Full Name"
          type="text"
          register={register("name")}
          error={errors.name?.message}
        />
        <InputGroup
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
        />

        <InputGroup
          label="Phone Number"
          type="text"
          register={register("phone")}
          error={errors.phone?.message}
        />
      </UserInputFields>
    </UserInformationInputsStyle>
  );
};

export default UserInformationInputs;
