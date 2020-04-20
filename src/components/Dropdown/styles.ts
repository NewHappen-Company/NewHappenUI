import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.select<Props>`
  background: ${props => props.background};
  color:${props => props.color};
  border: none;
  border-radius: 4px;
  padding: 18px 45px;

  &__option {
    display: block;
    padding: 15px;
    background-color: #fff;
    
    &:hover,
    &:focus {
      color: #546c84;
      background-color: #fbfbfb;
    }
  }

`;