import styled from "styled-components";

export const UserCardStyle = styled.div`
  background-color: ${({ bg }) => bg};
  padding: 11px 0px 8px 11px;
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: var(--borderRadius);
`;

export const UserCardImg = styled.img`
  width: 102px;
  height: 129px;
  border-radius: 4px;
  vertical-align: middle;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  & > table tr td:last-of-type {
    font-weight: bold;
    text-transform: capitalize;
    padding-left: 6px;
  }

  & > table tr td {
    padding-bottom: 12px;
  }
`;

export const TopButtons = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  display: flex;
  gap: 8px;

  & > svg,
  & > input {
    cursor: pointer;
    width: 14px;
    height: 14px;
  }
  & > a {
    color: gray;
  }
`;

export const BottomButtons = styled.div`
  position: absolute;
  right: 6px;
  bottom: 6px;
`;
