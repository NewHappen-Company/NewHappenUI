import React from 'react';

import { InputNH } from './styles';

export interface Props {
  name: string;
  value: string;
  setValue: (text: string) => void;
  type?: string;
  color?: string;
  placeholder?: string;
  grey?: boolean;
  icon?: React.ReactNode | React.Component;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
  grey?: boolean;
}

export const Input: React.FC<Props> = ({
  name,
  type = 'text',
  color = '#FD4935',
  value,
  setValue,
  placeholder,
  icon,
  grey = false
}) => {
  return (
    <InputNH grey={grey}>
      { icon && grey && (
        <div>
          {icon}
        </div>
      ) }
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      { icon && !grey && icon }
    </InputNH>
  );
};
