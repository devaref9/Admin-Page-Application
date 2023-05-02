import styled from "styled-components";

export const UserCardStyle = styled.div`
  position: relative;
  border-radius: var(--borderRadius);
  flex-basis: 35%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  
  @media screen and (max-width: 645px) {
    flex-basis: 100%;
  }
`;

export const UserCardImg = styled.img`
  width: 80px;
  height: 80px;
  border: 4px solid white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 45%;
  z-index: 2;
  margin-bottom: 12px;
`;

export const UserContent = styled.div`
  padding: 15px 0;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background-color: ${({ bg }) => bg};
  border-radius: var(--borderRadius);
`;

export const UserTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #212a3e;
`;

export const UserEmail = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #9ba4b5;
`;

export const UserCardButtons = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  gap: 8px;

  & > input,
  & > a,
  & svg {
    cursor: pointer;
    width: 14px;
    height: 14px;
  }
  & > a {
    color: #9ba4b5;
  }

  & > a:hover {
    color: #212a3e;
  }
`;
