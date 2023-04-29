import React from "react";
import {
  UserInformationInputsStyle,
  UserProfileInput,
  UserProfileLabel,
  UserProfilePic,
} from "./UserInformationInputs.style";
import NoImg from "../../assets/images/no-image.png";

const UserInformationInputs = ({ register, errors, imgSrc = null }) => {
  return (
    <UserInformationInputsStyle>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" {...register("name")} />
              <span style={{ color: "red" }}>{errors.name?.message}</span>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="k" {...register("email")} />
              <span style={{ color: "red" }}>{errors.email?.message}</span>
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>
              <input
                placeholder="Example: 09121234567"
                type="text"
                {...register("phone")}
              />
              <span style={{ color: "red" }}>{errors.phone?.message}</span>
            </td>
          </tr>
          <tr>
            <td>Profile Pic:</td>
            <td>
              <UserProfileLabel htmlFor="image">
                <UserProfilePic>
                  <img
                    htmlFor="photo-upload"
                    src={imgSrc ? imgSrc : NoImg}
                    alt="preview"
                  />
                </UserProfilePic>
                <UserProfileInput
                  id="image"
                  type="file"
                  {...register("image")}
                />
                <span style={{ color: "red" }}>{errors.image?.message}</span>
              </UserProfileLabel>
            </td>
          </tr>
          {/*  */}
        </tbody>
      </table>
    </UserInformationInputsStyle>
  );
};

export default UserInformationInputs;
