import React from 'react';

import { FullScreen, Container, Close } from './styles';

interface Props {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  title: string;
}

export interface IFullScreen {
  open: boolean;
}

export const Modal: React.FC<Props> = ({
  open,
  setOpen,
  title,
  children,
  ...props
}) => {
  return (
    <FullScreen open={open}>
      <Container {...props} title={title}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <h2>{title}</h2>
          <Close onClick={() => setOpen(false)}>X</Close>
        </div>

        {children}
      </Container>
    </FullScreen>
  );
};
