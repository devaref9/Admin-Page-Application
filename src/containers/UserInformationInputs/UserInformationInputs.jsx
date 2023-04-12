import React, { useEffect, useState } from "react";
import {
  UserInformationInputsStyle,
  UserProfileInput,
  UserProfileLabel,
  UserProfilePic,
} from "./UserInformationInputs.style";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import NoImg from "../../assets/images/no-image.png";

const UserInformationInputs = ({ setNewUser, submitState, user }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ID, setID] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  // useEffect(() => {
  //   setNewUser({
  //     firstname: { value: firstname, isChecked: false },
  //     lastname: { value: lastname, isChecked: false },
  //     id: { value: ID, isChecked: false },
  //     address: { value: address, isChecked: false },
  //     birthdate: { value: date, isChecked: false },
  //     imgSrc: { value: imageURLs, isChecked: false },
  //     mobile: { value: mobile, isChecked: false },
  //     isChecked: false,
  //     isSelected: false,
  //   });
  // }, [
  //   user,
  //   submitState,
  //   imageURLs,
  //   mobile,
  //   setNewUser,
  //   firstname,
  //   date,
  //   address,
  //   lastname,
  //   ID,
  // ]);

  useEffect(() => {
    if (user) {
      setFirstname(user.name.first);
      setLastname(user.name.last);
      setID(user.id.value);
      setAddress(
        user.location.country +
          ", " +
          user.location.city +
          ", " +
          user.location.street.name
      );
      setMobile(user.phone);
      // setDate(Date(user.birthdate));
    }
  }, [user]);

  return (
    <UserInformationInputsStyle>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Family Name:</td>
            <td>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Mobile:</td>
            <td>
              <PhoneInput placeholder="" value={mobile} onChange={setMobile} />
            </td>
          </tr>
          <tr>
            <td>ID No:</td>
            <td>
              <input
                required
                type="text"
                value={ID}
                onChange={(e) => setID(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Birth Date:</td>
            <td>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Profile Pic:</td>
            <td>
              <UserProfileLabel htmlFor="photo-upload">
                <UserProfilePic>
                  {user && !imageURLs.length ? (
                    <img
                      htmlFor="photo-upload"
                      src={
                        user.picture.thumbnail
                        // user.imgSrc.value && user.imgSrc.value.length > 0
                        //   ? process.env.PUBLIC_URL + user.imgSrc.value
                        //   : NoImg
                      }
                      alt="profile"
                    />
                  ) : (
                    imageURLs.map((imageSrc) => (
                      <img
                        htmlFor="photo-upload"
                        src={imageSrc}
                        alt="profile"
                      />
                    ))
                  )}
                </UserProfilePic>

                <UserProfileInput
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setImages([...e.target.files]);
                  }}
                />
              </UserProfileLabel>
            </td>
          </tr>
        </tbody>
      </table>
    </UserInformationInputsStyle>
  );
};

export default UserInformationInputs;
