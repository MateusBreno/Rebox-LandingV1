import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    width: 100vw;
    padding: 0 0.5rem;
  }
`;

export const VideoTitle = styled.h1`
  color: ${({ theme }): string => theme.colors.primary};
  text-align: center;
  margin-bottom: 5rem;
`;

export const Video = styled.div`
  height: 80vh;
  position: relative;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.large}) {
    height: 70vh;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    height: 60vh;
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoOverlayCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${({ theme }): string => theme.colors.secondary};
  cursor: pointer;
`;

export const Title = styled.h2`
  color: ${({ theme }): string => theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-size: 2rem;
  color: ${({ theme }): string => theme.colors.primary};
  text-align: center;
  padding: 0 2rem;

  @media (max-width: ${({ theme }): string => theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;
