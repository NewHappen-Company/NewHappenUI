import styled from 'styled-components';

import { IFullScreen } from './index';

export const FullScreen = styled.div<IFullScreen>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  z-index: 9999;

  animation: fadeModal 380ms ease-in-out 1;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 80%;

  padding: 20px;

  background-color: #FFF;
  border-radius: 8px;

  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  color: rgba(0, 0, 0, .81);

  h2 {
    color: rgba(0, 0, 0, .95);
    margin-bottom: 0;
  }
`;

export const Close = styled.button`
  cursor: pointer;
  align-self: flex-end;

  margin-bottom: 5px;
  margin-left: auto;

  color: rgba(0, 0, 0, .81);

  background: transparent;
  border: 0;

  font-size: 16px;

  &:hover {
    color: rgba(0, 0, 0, .5);
  }
`;
