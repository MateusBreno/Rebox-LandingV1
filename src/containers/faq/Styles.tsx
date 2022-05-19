import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  background-color: ${({ theme }): string => theme.colors.terciary};
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.primary};

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: 430px) {
    font-size: 1.8rem;
  }

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
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

export const Options = styled.div`
  padding: 1rem 2rem;
  margin: 0 8rem;
  background-color: ${({ theme }): string => theme.colors.secondary};
  display: flex;

  .active {
    > * {
      svg {
        transform: rotate(90deg);
        color: ${({ theme }): string => theme.colors.primary};
      }
      span {
        color: ${({ theme }): string => theme.colors.primary};
      }
    }
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
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobileLarge}) {
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobile}) {
    padding: 2rem 4rem;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  .icon {
    transform-origin: 1px;
    transition: all 0.3s linear;
    transform: rotate(0);
  }

  &:hover {
    span {
      color: ${({ theme }): string => theme.colors.primary};
    }

    .icon {
      color: ${({ theme }): string => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobile}) {
    padding: 0.5rem 0rem;
    margin-right: 0;
  }
`;

export const OptionText = styled.span`
  margin-left: 0.5rem;
  color: ${({ theme }): string => theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const CollapsedDiv = styled.div`
  margin: 0 auto;
`;

export const FaqWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 8rem;
  padding-top: 2rem;
  background-color: ${({ theme }): string => theme.colors.secondary};

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
    display: flex;
    flex-direction: column;
  }
`;

export const Question = styled.div<{ open: boolean }>`
  margin-top: 0.5rem;
  max-width: calc(100% - 1rem);
  padding: 1rem;
  border-bottom: 1px solid #d4d4d4;
  cursor: pointer;

  svg {
    transform-origin: 1px;
    transition: all 0.3s linear;
    transform: ${({ open }): string => (open ? 'rotate(360deg)' : 'rotate(0)')};
    color: ${({ theme, open }): string =>
      open ? theme.colors.black : theme.colors.primary};
  }

  ul li {
    margin-left: 2rem;
    &::marker {
      font-weight: 400;
      font-size: 1rem;
      color: #000;
    }
  }
`;

export const QuestionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionTitle = styled.span<{ open: boolean }>`
  font-size: 1rem;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  color: ${({ theme, open }): string =>
    open ? theme.colors.black : theme.colors.primary};

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobileLarge}) {
    font-size: 0.9rem;
  }
`;

export const QuestionDescWrapper = styled(animated.div)`
  overflow: hidden;
`;

export const QuestionDesc = styled.p`
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 22.5px;
  padding: 15px 0;
`;
