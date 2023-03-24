import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 90%;
  margin: 1rem 1rem;

  .slide {
    transform: scale(0.9);
    transition: transform 300ms;
    opacity: 0.5;
    width: 30rem;
  }

  .active {
    transform: scale(1.1);
    opacity: 1;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.extraLarge}) {
    iframe {
      width: 800px;
    }
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    iframe {
      width: 700px;
    }
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    iframe {
      width: 500px;
    }
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobileLarge}) {
    iframe {
      width: 450px;
    }
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.mobile}) {
    iframe {
      width: 350px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  align-content: center;
`;

export const ContentOverlay = styled.div`
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentOverlayCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid white;
  opacity: 0.8;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
`;
