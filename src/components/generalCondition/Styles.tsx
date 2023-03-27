import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem;
  margin: 0 8rem;
  background-color: ${({ theme }): string => theme.colors.secondary};

  ul,
  ol {
    padding-left: 3rem;
  }

  p {
    margin-bottom: 0.9rem;
  }

  h1 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1.2;
  }

  > * {
    font-size: 1rem;
    line-height: 24px;
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
    ul,
    ol {
      padding-left: 1.5rem;
    }
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobile}) {
    h1 {
      font-size: 1.78em;
    }
  }
`;
