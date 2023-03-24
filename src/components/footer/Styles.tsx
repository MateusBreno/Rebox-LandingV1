import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }): string => theme.colors.primary};
  text-align: center;
  padding: 1rem 0 0.5rem 0;
`;

export const Logo = styled.img``;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 22.5px;
    color: ${({ theme }): string => theme.colors.secondary};

    @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
      font-size: 13px;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  span {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 22.5px;
    color: ${({ theme }): string => theme.colors.secondary};

    @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
      font-size: 14px;
    }
  }
`;

export const Divider = styled.div`
  border-top: 1px solid #fff;
  margin: 1rem 0 0.5rem 0;
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 21px;
  color: ${({ theme }): string => theme.colors.secondary};
`;

export const Facebook = styled.a`
  margin-left: 1rem;
  background-color: #3b5998;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  transform: scale(0.9);
  cursor: pointer;

  &:hover {
    background-color: #354f86;
    transform: scale(1);
  }
`;

export const Instagram = styled.a`
  background-color: #c62678;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  transform: scale(0.9);
  cursor: pointer;

  &:hover {
    background-color: #ad2069;
    transform: scale(1);
  }
`;

export const Blog = styled.a`
  background-color: #0b3183;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  transform: scale(0.9);
  cursor: pointer;

  &:hover {
    background-color: #0b3183;
    transform: scale(1);
  }
`;
