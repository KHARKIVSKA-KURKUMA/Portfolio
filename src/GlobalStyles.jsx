import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* ---------------------------------- reset --------------------------------- */
  body {
  font-family: "Inconsolata", monospace;
  margin: 0;
}

a {
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
} 
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 60px;
  margin: 0 auto;
  background-color: #dbe7c95c;
`;
