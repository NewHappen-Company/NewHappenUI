import React from 'react';

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  width?: number;
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = '#FF3300',
  color = '#fff',
  outlined = false,
  width,
  ...props
}) => {
  return (
    <Container
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };
