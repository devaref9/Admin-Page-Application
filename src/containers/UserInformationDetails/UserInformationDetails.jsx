import React, { useEffect, useState } from "react";
import UserCheckButtons from "../../components/UserCheckButtons/UserCheckButtons";
import {
  UserInformationDetailsStyle,
  UserProfilePic,
} from "./UserInformationDetails.style";
import NoImg from "../../assets/images/no-image.png";

const UserInformationDetails = ({ user, submitState, setNewUser }) => {
  // const [firstnameChecked, setFirstnameChecked] = useState(
  //   user.firstname.isChecked
  // );
  // const [lastnameChecked, setLastnameChecked] = useState(
  //   user.lastname.isChecked
  // );
  // const [mobileChecked, setMobileChecked] = useState(user.mobile.isChecked);
  // const [birthdateChecked, setBirthdateChecked] = useState(
  //   user.birthdate.isChecked
  // );
  // const [addressChecked, setAddressChecked] = useState(user.address.isChecked);
  // const [IDChecked, setIDChecked] = useState(user.id.isChecked);
  // const [imgSrcChecked, setImgSrcChecked] = useState(user.imgSrc.isChecked);

  // useEffect(() => {
  //   setNewUser({
  //     firstname: { value: user.firstname.value, isChecked: firstnameChecked },
  //     lastname: { value: user.lastname.value, isChecked: lastnameChecked },
  //     id: { value: user.id.value, isChecked: IDChecked },
  //     address: { value: user.address.value, isChecked: addressChecked },
  //     birthdate: { value: user.birthdate.value, isChecked: birthdateChecked },
  //     imgSrc: { value: user.imgSrc.value, isChecked: imgSrcChecked },
  //     mobile: { value: user.mobile.value, isChecked: mobileChecked },
  //     isChecked: user.isChecked,
  //     isSelected: user.isSelected,
  //   });
  // }, [
  //   user,
  //   setNewUser,
  //   submitState,
  //   addressChecked,
  //   firstnameChecked,
  //   lastnameChecked,
  //   mobileChecked,
  //   IDChecked,
  //   imgSrcChecked,
  //   birthdateChecked,
  // ]);

  return (
    <UserInformationDetailsStyle>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{user.name.first}</td>
            <td>
              <UserCheckButtons
              // setChecked={setFirstnameChecked}
              // checked={firstnameChecked}
              />
            </td>
          </tr>
          <tr>
            <td>Family Name:</td>
            <td>{user.name.last}</td>
            <td>
              <UserCheckButtons
              // checked={lastnameChecked}
              // setChecked={setLastnameChecked}
              />
            </td>
          </tr>
          <tr>
            <td>Mobile:</td>
            <td>{user.phone}</td>
            <td>
              <UserCheckButtons
              // checked={mobileChecked}
              // setChecked={setMobileChecked}
              />
            </td>
          </tr>
          <tr>
            <td>ID No:</td>
            <td>{user.id.value}</td>
            <td>
              <UserCheckButtons
              //  checked={IDChecked} setChecked={setIDChecked}
              />
            </td>
          </tr>
          <tr>
            <td>Birth Date:</td>
            <td>{user.dob.date}</td>
            <td>
              <UserCheckButtons
              // checked={birthdateChecked}
              // setChecked={setBirthdateChecked}
              />
            </td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              {user.location.country +
                ", " +
                user.location.city +
                ", " +
                user.location.street.name}
            </td>
            <td>
              <UserCheckButtons
              // checked={addressChecked}
              // setChecked={setAddressChecked}
              />
            </td>
          </tr>
          <tr>
            <td>Profile Pic:</td>
            <td>
              <UserProfilePic>
                <img
                  src={
                    user.picture.large
                    // user.imgSrc.value && user.imgSrc.value.length > 0
                    //   ? process.env.PUBLIC_URL + user.imgSrc.value
                    //   : NoImg
                  }
                  alt="profile"
                />
              </UserProfilePic>
            </td>
            <td>
              <UserCheckButtons
              // checked={imgSrcChecked}
              // setChecked={setImgSrcChecked}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </UserInformationDetailsStyle>
  );
};

export default UserInformationDetails;
