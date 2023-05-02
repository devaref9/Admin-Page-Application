import styled from "styled-components";

export const HomePageStyle = styled.div`
  position: relative;
`;

export const HomeContent = styled.div`
  padding: 75px 0 30px 0;
  margin-left: 25vw;
  width: 75vw;
  position: relative;

  @media screen and (max-width: 992px) {
    padding-top: 60px;
    margin-left: 0;
    width: 100%;
  }

  @media screen and (max-width: 645px) {
    padding-top: 75px;
  }
`;

export const HomePageAddBtn = styled.div`
  position: fixed;
  top: 85vh;
  left: 25vw;
  transform: translateX(-50%);
  z-index: 32;

  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.2)
    transform: translate(0px, -10px) scale(1.2)
  }

  @media screen and (max-width: 992px) {
    left: 85vw;
    transform: translateX(0);
  }
  
  @media screen and (max-width: 645px) {
    left: 80vw;
  }
`;

export const HoemPageSelectAndDelete = styled.div`
  position: absolute;
  left: 12%;
  right: 12%;
  top: 15px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    left: 12%;
  }
`;
