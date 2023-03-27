import styled, { keyframes } from 'styled-components';
import images from '../../constants/images';

const pulseGrow = keyframes`
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const pulseDecrease = keyframes`
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

export const SuperContainer = styled.div`
  padding-bottom: 5rem;
`;

export const Wrapper = styled.div`
  height: 110vh;
  position: relative;
  padding: 1.75rem 8rem;
  background: url(${images.stenio}), rgba(160, 154, 149, 1);
  background-position-y: 15vh;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  background-attachment: fixed;

  @media (max-width: ${({ theme }): string => theme.breakpoints.extraLarge}) {
    padding: 1.75rem 3rem;
    background-position-y: 10vh;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    padding-top: 1rem;
    background-position-y: 0vh;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    padding-left: 20px;
    padding-right: 1.5rem;
    height: 80vh;
    background-attachment: scroll;
  }
`;

export const InnerWrapper = styled.div`
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    margin-top: 16rem;
    align-items: left;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  > * {
    transition: all 0.7s ease-in-out;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    cursor: pointer;
    &:hover {
      -webkit-animation-name: ${pulseDecrease};
      animation-name: ${pulseDecrease};
      -webkit-animation-duration: 0.7s;
      animation-duration: 0.7s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }): string => theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: ${({ theme }): string => theme.fontSizes.mediumSmall};
  color: ${({ theme }): string => theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: ${({ theme }): string => theme.fontSizes.small};
  color: ${({ theme }): string => theme.colors.secondary};
  background-color: ${({ theme }): string => theme.colors.btnBlue};
  padding: 1rem 2.5rem;
  transition: all 0.3s ease-in-out;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);

  &:hover {
    color: ${({ theme }): string => theme.colors.primary};
    background-color: ${({ theme }): string => theme.colors.secondary};
    -webkit-animation-name: ${pulseGrow};
    animation-name: ${pulseGrow};
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    display: flex;
    align-itens: center;
    justify-content: center;
    width: content;
    padding: 1rem 1rem;
    margin-left: 30vw;
    }

  }
`;
