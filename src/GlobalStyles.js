import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
   
    transition: background 0.5s ease, color 0.5s ease;
  }
`;

// background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};