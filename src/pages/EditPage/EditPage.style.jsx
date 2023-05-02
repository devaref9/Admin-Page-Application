import styled from "styled-components";

export const EditPageStyle = styled.div`
  background-color: ${({ bg }) => bg};
  min-height: 100vh;

  & form {
    padding-top: 75px;
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const EditPageButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 7px;
  margin-top: 70px;
`;
