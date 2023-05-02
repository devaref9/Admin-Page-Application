import styled from "styled-components";
import CameraIcon from "../../assets/svgs/Camera 2.svg";

export const UserInformationInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserProfilePic = styled.div`
  position: relative;
  cursor: pointer;

  & > img {
    width: 120px;
    height: 120px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    vertical-align: middle;
    border-radius: 45%;
  }

  &::before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: url("${CameraIcon}");
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    border: 4px solid white;
    border-radius: 45%;
  }
`;

export const UserProfileInput = styled.input`
  display: none;
`;

export const UserProfileLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-bottom: 35px;
`;

export const UserInputFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const UserProfileError = styled.span`
  position: absolute;
  width: 100%;
  bottom: -20px;
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger};
`;
