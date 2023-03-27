import styled from 'styled-components';

interface backgroundProps {
  show: boolean;
}

interface containerProps {
  width?: string;
  height?: string;
  padding?: { top: string; left: string; bottom: string; right: string };
}

export const Background = styled.div<backgroundProps>`
  ${({ show }): string =>
    show
      ? `
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-out;
    z-index: 1;
  `
      : 'display: none;'}
`;

export const Container = styled.div<containerProps>`
  width: ${({ width }): string | undefined => width};
  height: ${({ height }): string | undefined => height};
  padding: ${({ padding }): string | undefined =>
    padding && `${padding.top} ${padding.left} ${padding.bottom} ${padding.right}`};
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #938f99;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: initial;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

export const Body = styled.div`
  height: 100%;
  overflow-y: auto;
`;
