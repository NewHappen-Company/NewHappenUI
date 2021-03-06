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
  width?: number; 
  onClick?: () => any;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
  grey?: boolean;
  width?: number;
}

export const Input: React.FC<Props> = ({
  name,
  type = 'text',
  color = '#FD4935',
  value,
  setValue,
  placeholder,
  icon,
  grey = false,
  width,
  onClick
}) => {
  return (
    <InputNH grey={grey} width={width}>
      { icon && grey && (
        <div>
          {icon}
        </div>
      ) }
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      { icon && !grey && (
        <div onClick={onClick}>
          {icon}
        </div>
      ) }
    </InputNH>
  );
};
