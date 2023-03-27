import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem 2rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }): string => theme.colors.primary};
  text-align: center;
  margin-bottom: 0.8rem;
`;

export const Header = styled.div`
  width: 100%;
  height: 195px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1.5rem 0;
  background-color: ${({ theme }): string => theme.colors.primary};

  .headerDescWrapper {
    padding-top: 0.2em;
  }

  .headerTitle {
    font-size: 1rem;
    color: ${({ theme }): string => theme.colors.secondary};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .headerLabel {
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    color: ${({ theme }): string => theme.colors.secondary};
  }

  .headerDesc {
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }): string => theme.colors.secondary};
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }): string => theme.colors.terciary};
  padding-top: 1rem;
`;

export const WrapperTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
`;

export const WrapperPrice = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const Price = styled.h1`
  color: ${({ theme }): string => theme.colors.primary};
  line-height: 75px;
`;

export const PriceDesc = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 27px;
  margin-top: 1.5rem;
  color: ${({ theme }): string => theme.colors.primary};
`;

export const BenefitsWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 2rem;

  &:last-of-type {
    margin-top: 3.5rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .benefitSeparator {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
    width: 80%;
    display: flex;
    align-items: center;
    text-align: center;
    &::before,
    &::after {
      flex: 1;
      border-bottom: 1px solid ${({ theme }): string => theme.colors.primary};
      content: '';
    }
    &:not(:empty)::before {
      margin-right: 1em;
    }
    &:not(:empty)::after {
      margin-left: 1em;
    }
  }
`;

export const BenefitsTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }): string => theme.colors.primary};
`;

export const Benefit = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 17px;
  background-color: #00df1e;
  color: ${({ theme }): string => theme.colors.secondary};
  padding: 1.25rem;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Footer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 137px;
  border: 3px solid ${({ theme }): string => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .footerText {
    font-size: 1rem;
    font-weight: 600;
    line-height: 24px;
    color: ${({ theme }): string => theme.colors.primary};
  }
`;
