import styled from 'styled-components';

import { ILabel } from './index';

export const InputNH = styled.label<ILabel>`
  background-color: ${props => props.grey ? '#EEE' : '#FFF' };
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: ${props => props.grey ? 0 : 18 }px;

  > input {
    border: 0;
    width: 85%;
    color: ${props => props.color ? props.color : 'rgba(0, 0, 0, .9)'};
    font-size: 15px;
    background-color: transparent;
    padding: ${props => props.grey ? 18 : 0 }px;

    &::placeholder {
      color: ${props => props.grey ? 'rgba(0, 0, 0, .81)' : '#A8A8A8'};
      font-weight: ${props => props.grey ? 100 : '700'};
      font-size: 15px;
    }
  }

  div {
    background-color: #00c4db;
    height: 100%;
    padding: 18px;
    border-radius: 8px 0 0 8px;
  }

  svg {
    color: ${props => props.grey ? '#FFF' : '#A8A8A8'};
    font-size: 25px;
    cursor: pointer;
  }

  &:focus-within {
    border: ${props => props.grey ? 0 : '4px solid #A8A8A8'};
  }
`;
