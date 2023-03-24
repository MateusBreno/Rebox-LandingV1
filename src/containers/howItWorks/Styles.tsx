import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 0 8rem;
  background-color: ${({ theme }): string => theme.colors.primary};

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    padding-top: 1.5rem;
    padding: 2rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.secondary};
  text-align: center;
`;

export const Separator = styled.span`
  display: block;
  border-bottom: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-top: 3px solid ${({ theme }): string => theme.colors.secondary};
  content: '';
`;

export const SubTitle = styled.p`
  color: ${({ theme }): string => theme.colors.secondary};
  font-size: ${({ theme }): string => theme.fontSizes.medium};
  font-weight: 600;
  text-align: center;
  margin-top: 2.5rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
    text-align: unset;
  }
`;

export const Desc = styled.p`
  color: ${({ theme }): string => theme.colors.secondary};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    margin: 0;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const BodyWrapper = styled.div``;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoTextWrapper = styled.div``;

export const InfoTitle = styled.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }): string => theme.colors.secondary};
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    margin-bottom: 1.2rem;
  }
`;

export const InfoDesc = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 25.5px;
  color: ${({ theme }): string => theme.colors.secondary};
`;

export const InfoImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 102px;
  margin-right: 4rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    margin-left: 4rem;
    margin-bottom: 1.2rem;
  }
`;
