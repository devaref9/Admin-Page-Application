import styled from "styled-components";

export const AddPageStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  & form {
    padding-top: 75px;
    max-width: 450px;
    margin: 0 auto;
  }
`;