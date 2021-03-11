import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
  --bg: #F2F2F2;
  --text: #141414;
  --main: '#FE2C55';
 }

 * {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
 }

 body {
  font-size: 1rem;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  
  color: var(--text);
  background: var(--bg);
 }

 a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
 }

 li { list-style: none }
`;