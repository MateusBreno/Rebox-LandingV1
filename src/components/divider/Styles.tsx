import styled from 'styled-components';

interface Props {
  isBottom?: boolean;
}

export const Container = styled.div<Props>`
  ${({ theme, isBottom }): string =>
    isBottom
      ? `
          position: absolute;
          width: 100%;
          bottom: -200px;

          @media (max-width: ${theme.breakpoints.extraLarge}) {
            bottom: -180px;
          }

          @media (max-width: ${theme.breakpoints.large}) {
            width: 100%;
            bottom: -160px;
          }

          @media (max-width: 900px) {
            bottom: -155px;
          }

          @media (max-width: ${theme.breakpoints.tablet}) {
            bottom: -140px;
            left: -10px;
          }

          @media (max-width: ${theme.breakpoints.mobileLarge}) {
            left: 0px;
          }

          @media (max-width: 550px) {
            bottom: -135px;
            left: 0px;
          }

          @media (max-width: 500px) {
            bottom: -130px;
            left: 0px;
          }

          @media (max-width: ${theme.breakpoints.mobile}) {
            bottom: -125px;
          }

          @media (max-width: 500px) {
            bottom: -123px;
            left: 0px;
          }

          @media (max-width: 380px) {
            bottom: -115px;
          }
        `
      : `
        position: absolute;
        width: 100%;
        left: 0;
        transform: rotate(180deg) scaleX(-1);
        -webkit-transform: rotate(180deg) scaleX(-1);
        -ms-transform: rotate(180deg) scaleX(-1);
        bottom: -32px;
        height: 92px;

        @media (max-width: ${theme.breakpoints.extraLarge}) {
          bottom: -20px;
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          bottom: -10px;
        }

        @media (max-width: ${theme.breakpoints.mobileLarge}) {
          bottom: 0;
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
          bottom: 0px;
        }
        `};
`;

export const Image = styled.img``;
