import styled from "styled-components";
import CameraIcon from "../../assets/svgs/Camera 2.svg";

export const UserInformationInputsStyle = styled.div`
  & tr {
    width: 100%;
  }

  & tr:not(:first-of-type) td {
    padding-top: 12px;
  }

  & tr:last-of-type td {
    padding-top: 45px;
  }

  & tr:last-of-type td:first-of-type {
    display: block;
  }

  & tr td:last-of-type {
    width: 100%;
  }

  & tr td:first-of-type {
    white-space: nowrap;
    padding-right: 16px;
  }

  & input {
    width: 100%;
    text-align: right;
    color: #5f5f5f;
    padding: 6px 18px;
    border-radius: var(--borderRadius);
  }

  & .PhoneInputCountry {
    display: none;
  }
`;

export const UserProfilePic = styled.div`
  position: relative;
  width: 100px;
  height: 130px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;

  & > img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
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
    background-color: ${({ theme }) => theme.colors.primaryLight};
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;

export const UserProfileInput = styled.input`
  display: none;
`;

export const UserProfileLabel = styled.label`
  display: inline-block;
`;
