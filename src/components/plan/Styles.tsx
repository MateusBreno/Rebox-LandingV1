import styled from 'styled-components';

interface Props {
  bestSeller: boolean | undefined;
}

export const Container = styled.div<Props>`
  margin-top: 2.5rem;
  width: 32.875rem;
  border-radius: 25px;
  padding: 0.625rem;
  background-color: ${({ theme }): string => theme.colors.secondary};
  -webkit-box-shadow: 0px 0px 7px 0px ${({ theme }): string => theme.colors.primary};
  box-shadow: 0px 0px 7px 0px ${({ theme }): string => theme.colors.primary};
  border: ${({ bestSeller }): string => (bestSeller ? '3px solid #f10909' : '')};

  @media (max-width: ${({ theme }): string => theme.breakpoints.extraLarge}) {
    width: 28rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    width: 26rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    margin-right: 0 !important;
    width: 24rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobileLarge}) {
    width: 22rem;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobileLarge}) {
    width: 20rem;
  }
`;

export const Title = styled.div`
  padding: 1.25rem 0;
  background-color: ${({ theme }): string => theme.colors.primary};
  color: ${({ theme }): string => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 28.8px;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;

  .ribbonPrice {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    transform: rotate(90deg);
    width: 150px;
    overflow: hidden;
    height: 150px;

    .ribbonInner {
      background-color: #ce6161;
      color: #fff;
      text-align: center;
      width: 200%;
      transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
      margin-top: 35px;
      font-size: 11px;
      line-height: 2;
      text-transform: uppercase;
    }
  }
`;

export const Price = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  line-height: 48px;
  color: ${({ theme }): string => theme.colors.primary};
  text-align: center;
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 0 2rem;
`;

export const Desc = styled.div`
  padding-bottom: 0.2rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 21px;
  text-align: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(221, 221, 221, 0.63);
  }
`;

export const KnowMoreButton = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 0.675rem;
  background-color: ${({ theme }): string => theme.colors.secondary};
  border: 3px solid ${({ theme }): string => theme.colors.primary};
  border-radius: 25px;
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }): string => theme.colors.primary};
`;
