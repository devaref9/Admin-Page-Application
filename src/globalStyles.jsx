import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --transition: .3s;
  --borderRadius: 5px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  outline:0;
  font-family: 'Roboto', sans-serif;
}

html {
  -webkit-font-smoothing: antialiased;
}

body {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    background-color : ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text}
  }
`;

export const Container = styled.div`
  max-width: 85%;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 8.5px; */
  /* @media screen and (max-width: 992px) {
    padding: 0 30px;
  } */
`;

export default GlobalStyle;
