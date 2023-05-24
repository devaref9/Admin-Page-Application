import styled from "styled-components";

export const HomePageStyle = styled.div`
  position: relative;
  min-height: 100vh;
`;
export const Content = styled.div`
  padding: 75px 0 30px 0;
  margin-left: 25vw;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.large}) {
    padding-top: 60px;
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding-top: 75px;
  }
`;
export const AddBtn = styled.div`
  position: fixed;
  top: 85vh;
  left: 25vw;
  transform: translateX(-50%);
  z-index: 32;

  @media (max-width: ${({ theme }) => theme.media.large}) {
    left: 85vw;
    transform: translateX(0);
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    left: 80vw;
  }
`;
export const ButtonsWrapper = styled.div`
  position: absolute;
  left: 12%;
  right: 12%;
  top: 15px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.media.large}) {
    left: 12%;
  }
`;
export const SidebarStyle = styled.div`
  position: fixed;
  padding: 45px 25px;
  height: 100vh;
  width: 25vw;
  background-color: ${({ theme }) => theme.colors.primaryDark};

  @media (max-width: ${({ theme }) => theme.media.large}) {
    width: 100%;
    position: relative;
    height: 100px;
    padding: 25px 25px;
  }
`;
