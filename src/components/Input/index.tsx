import React from 'react';

import { Label } from './styles';

export interface Props {
  name: string;
  value: string;
  setValue: (text: string) => void;
  type?: string;
  color?: string;
  placeholder?: string;
  icon?: React.ReactNode | React.Component;
  light?: boolean;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
  light?: boolean;
}

export const Input: React.FC<Props> = ({
  name,
  type = 'text',
  color = '#FD4935',
  value,
  setValue,
  placeholder,
  icon,
  light = false
}) => {
  return (
    <Label light={light} htmlFor={name} color={color} icon={icon}>
      <input
        name={name}
        type={type}
        aria-label={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      {icon && icon}
    </Label>
  );
};
