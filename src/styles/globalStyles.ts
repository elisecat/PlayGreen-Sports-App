import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
`;