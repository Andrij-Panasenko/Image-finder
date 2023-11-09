import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
   body {
  font-family: Ubuntu, sans-serif;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.link {
  text-decoration: none;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;
