import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  padding-top: 10rem;
  background-color: ${({ theme }): string => theme.colors.primary};

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    padding-top: 5rem;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.secondary};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Desc = styled.p`
  color: ${({ theme }): string => theme.colors.secondary};
  font-size: ${({ theme }): string => theme.fontSizes.small};
  font-weight: 500;
  text-align: center;
`;

export const Body = styled.div`
  height: 60%;
  display: flex;
  justify-content: space-around;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const ImageWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 260px;
`;

export const Button = styled.button`
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 12px 24px;
  font-size: 1.125rem;
  font-weight: 500;
  background-color: ${({ theme }): string => theme.colors.btnGreen};
  color: ${({ theme }): string => theme.colors.secondary};
`;
