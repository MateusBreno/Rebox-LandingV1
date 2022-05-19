import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }): string => theme.colors.secondary};
  padding-top: 8rem;
  margin-bottom: 10rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.primary};
  text-align: center;
`;

export const Separator = styled.span`
  display: block;
  border-bottom: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-top: 3px solid ${({ theme }): string => theme.colors.primary};
  content: '';
`;

export const RowButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;

  .btnActive {
    button {
      background-color: ${({ theme }): string => theme.colors.primary};
      color: ${({ theme }): string => theme.colors.secondary};
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  margin-right: 2rem;
  padding: 1rem 3.125rem;
  border: 3px solid ${({ theme }): string => theme.colors.primary};
  border-radius: 100px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }): string => theme.colors.primary};
  background-color: ${({ theme }): string => theme.colors.secondary};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }): string => theme.colors.primary};
    color: ${({ theme }): string => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 90vw;
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  .planActive {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  display: none;
`;
