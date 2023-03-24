import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const TextLink = styled.a<Props>`
  font-size: ${({ theme }): string => theme.fontSizes.small};
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${({ theme, open }): string =>
    open
      ? ''
      : `
          color: ${theme.colors.secondary};
          display: inline-block;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: ${theme.colors.secondary};
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
          &:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
`;

export const Ul = styled.div<Props>`
  width: 80%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: ${({ theme }): string => theme.colors.secondary};
    position: fixed;
    transform: ${({ open }): string => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: ${({ theme }): string => theme.colors.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      padding: 0.5rem;
      &:hover {
        color: ${({ theme }): string => theme.colors.secondary};
        background-color: ${({ theme }): string => theme.colors.primary};
      }
    }
  }
`;
