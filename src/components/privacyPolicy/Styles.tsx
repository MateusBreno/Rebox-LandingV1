import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem;
  margin: 0 8rem;
  background-color: ${({ theme }): string => theme.colors.secondary};

  p {
    margin-bottom: 0.9rem;
  }

  a {
    text-decoration: none;
    color: #c36;
  }

  h1 {
    font-size: 2em;
    color: ${({ theme }): string => theme.colors.text};
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.5em;
    color: ${({ theme }): string => theme.colors.text};
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.17em;
    color: ${({ theme }): string => theme.colors.text};
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  ul {
    padding-left: 3rem;
  }

  > *:not(h1, h2, h3) {
    font-size: 15px;
    color: ${({ theme }): string => theme.colors.text};
    line-height: 22.5px;
  }

  @media (max-width: 1300px) {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.extraLarge}) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-right: 0;
    padding-top: 1rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobile}) {
    h1 {
      font-size: 1.78em;
    }
  }
`;
