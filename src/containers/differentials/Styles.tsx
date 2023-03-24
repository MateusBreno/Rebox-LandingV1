import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 8rem;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.extraLarge}) {
    padding: 0 0;
  }
`;

export const Header = styled.div`
  background-color: ${({ theme }): string => theme.colors.primary};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${({ theme }): string => theme.colors.secondary};
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  width: 208px;
  padding: 1.5rem 0.675rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14.8px;
  text-align: center;
`;
