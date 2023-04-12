import styled from "styled-components";

export const UserCheckButtonsStyle = styled.div`
  display: flex;
  gap: 4px;

  & > svg {
    color: grey;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }

  & > svg:first-of-type:hover {
    color: red;
  }

  & > svg:last-of-type:hover {
    color: green;
  }
`;
