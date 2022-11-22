import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
h2,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
    margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}

@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/poppins-v20-latin-regular.eot');
    src: local(''),
        url('../fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'),
        url('../fonts/poppins-v20-latin-regular.woff2') format('woff2'),
        url('../fonts/poppins-v20-latin-regular.woff') format('woff'),
        url('../fonts/poppins-v20-latin-regular.ttf') format('truetype'),
        url('../fonts/poppins-v20-latin-regular.svg#Poppins') format('svg');
}

@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/poppins-v20-latin-700.eot');
    src: local(''),
        url('../fonts/poppins-v20-latin-700.eot?#iefix') format('embedded-opentype'),
        url('../fonts/poppins-v20-latin-700.woff2') format('woff2'),
        url('../fonts/poppins-v20-latin-700.woff') format('woff'),
        url('../fonts/poppins-v20-latin-700.ttf') format('truetype'),
        url('../fonts/poppins-v20-latin-700.svg#Poppins') format('svg');
}

body {
    font-family: 'Poppins', sans-serif;
}
`;
