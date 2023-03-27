import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem;
  margin: 0 8rem;
  background-color: ${({ theme }): string => theme.colors.secondary};

  p {
    margin-bottom: 0.9rem;
  }

  ul {
    margin-left: 3rem;
  }

  > * {
    font-size: 1rem;
    line-height: 20px;
    color: ${({ theme }): string => theme.colors.text};
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
    ul {
      margin-left: 1.8rem;
    }
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobile}) {
    h1 {
      font-size: 1.78em;
    }
  }
`;
