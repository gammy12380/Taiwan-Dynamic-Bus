import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --main: #343535;
  --white:#F5F5F5;
  --gray:#1C1D1D;
  --yellow:#FCD42C;
  --lightGray:#414242;
  --lightBlue:#1CC8EE;
  --black:#131414;
  --blueGradient: linear-gradient(323.99deg, #1CC8EE 65.35%, #FFFFFF 89.01%),linear-gradient(149.2deg, #1CC8EE 29.55%, #07738B 78.54%);
  --whiteGradient: linear-gradient(344.08deg, #F1F1F1 17.96%, #FFFFFF 84.68%),linear-gradient(0deg, #F5F5F5, #F5F5F5);    
  --yellowGradient: linear-gradient(16.05deg, #FCD42C 49.56%, #FFFFFF 86.1%),linear-gradient(206.57deg, #FCD42C 18.7%, #A98B0D 80.04%);
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
  line-height: 1;
  background-color: ${(props) => props.theme.main};
}
*,body{
  font-family: 'Noto Sans TC', Arial, sans-serif;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}

`;

export default GlobalStyle;
