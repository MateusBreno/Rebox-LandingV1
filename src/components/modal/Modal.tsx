import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Background, Body, Container, Header } from './Styles';

interface Props {
  width?: string;
  height?: string;
  title?: JSX.Element;
  divider?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  show: boolean;
  padding?: { top: string; left: string; bottom: string; right: string };
  onClose: () => unknown;
}

const Modal: React.FC<Props> = ({
  width,
  height,
  title,
  divider,
  padding = { top: '', left: '', bottom: '', right: '' },
  onClose,
  children,
  show,
}) => {
  return (
    <Background show={show}>
      <Container width={width} height={height} padding={padding}>
        <Header>
          {title || <div />}
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Header>
        {divider}
        <Body>{children}</Body>
      </Container>
    </Background>
  );
};

export default Modal;
