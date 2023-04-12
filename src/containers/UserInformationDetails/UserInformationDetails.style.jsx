import styled from "styled-components";

export const UserInformationDetailsStyle = styled.div`
  & table {
    padding-left: 28px;
    padding-right: 4px;
    margin: 0 auto;
    max-width: 100%;
  }

  & tr:not(:first-of-type) td {
    padding-top: 12px;
  }

  & tr td:nth-of-type(2) {
    font-weight: bold;
    text-transform: capitalize;
  }

  & tr:last-of-type td {
    padding-top: 45px;
  }

  & tr:last-of-type td:first-of-type {
    display: block;
  }

  & tr:last-of-type {
    position: relative;
  }

  & tr:last-of-type td:last-of-type {
    position: absolute;
    bottom: 0;
    left: 220px;
  }

  & tr td:first-of-type {
    white-space: nowrap;
    padding-right: 30px;
  }
  & tr td:nth-of-type(2) {
    white-space: nowrap;
    padding-right: 22px;
  }
`;

export const UserProfilePic = styled.div`
  border-radius: var(--borderRadius);
  width: 185px;

  & > img {
    width: 100px;
    height: 130px;
    vertical-align: middle;
  }
`;
