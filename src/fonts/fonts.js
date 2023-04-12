import { createGlobalStyle } from "styled-components";

import IranSansWebWoff from "./IRANSansWeb.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Iran Sans';
        src: local('Iran Sans'), local('IranSans'),
        url(${IranSansWebWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
