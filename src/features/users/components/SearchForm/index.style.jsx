import styled from "styled-components";

export const SearchFormStyle = styled.form`
  position: relative;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  border-radius: 9px;
  overflow: hidden;

  & > input {
    padding: 16px 24px;
    font-size: 14px;
    line-height: 16px;
    font-family: "Iran Sans";
    font-weight: 600;
    letter-spacing: 1px;
    width: 100%;
    color: #5f5f5f;
  }

  & > input::placeholder {
    color: inherit;
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  right: 23px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
