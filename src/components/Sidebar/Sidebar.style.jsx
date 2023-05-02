import styled from "styled-components";

export const SidebarStyle = styled.div`
  position: fixed;
  padding: 45px 25px;
  height: 100vh;
  width: 25vw;
  background-color: ${({ bg }) => bg};
    @media screen and (max-width: 992px) {
      width: 100%;
      position: relative;
      height: 100px;
      padding: 25px 25px;
  }
`;
