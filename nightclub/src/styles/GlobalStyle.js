import { createGlobalStyle } from "styled-components";
import Ubuntu from "../fonts/Ubuntu-Regular.ttf";
import UbuntuMedium from "../fonts/Ubuntu-Medium.ttf";
import UbuntuLight from "../fonts/Ubuntu-Light.ttf";
const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
@font-face {
    font-family: 'Ubuntu Regular';
    src: url(${Ubuntu});
    font-style: normal;
}
@font-face {
    font-family: 'Ubuntu Medium';
    src: url(${UbuntuMedium});
    font-style: normal;
}
@font-face {
    font-family: 'Ubuntu Light';
    src: url(${UbuntuLight});
    font-style: normal;
}
:root{
    --navy-blue: #030203;
    --magenta: #FF2A70;
    --light-grey: #E0E0E0;
    --white: #FFFFFF;
    --body-text: 15px;
    --body-height:25px;
    --small-head: 24px;
    --small-weight:500;
    --small-height:1.1;
    --regular-head: 36px;
    --regular-spacing:0.075em;
    --regular-weight:700;
    --regular-line-height:1.1;
}
img{
    max-width:100%;
}
html{
    font-size: 15px;
    color:white;
    background-color:var(--navy-blue);
    font-family:'Ubuntu Regular';
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
}
`;
export default GlobalStyles;
