import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const StyledBurger = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  top: 16px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme, open }): string =>
      open ? theme.colors.primary : theme.colors.secondary};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }): string => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }): string => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }): string => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }): string => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
