import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: ${({ theme }): string => theme.fontSizes.extraLarge};
    font-weight: 700;

    @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: ${({ theme }): string => theme.fontSizes.large};
    font-weight: 700;

    @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
