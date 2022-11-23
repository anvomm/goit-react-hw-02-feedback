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


body {
    font-family: 'Tahoma', sans-serif;
}
`;
