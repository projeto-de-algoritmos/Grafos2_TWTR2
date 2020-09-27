import styled from 'styled-components';

import { Twitter } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--primary);
`;

export const Card = styled.div`
  width: 360px;
  min-height: 240px;
  border-radius: 5px;
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 80%;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
`;

export const UsernameInput = styled.input`
  width: 80%;
  height: 39px;
  font-size: 14px;
  padding: 0 15px 0 15px;
  border-radius: 19.5px;
  background: var(--outline);
  outline: 0;
  color: var(--white);

  &::placeholder {
    color: var(--white);
  }
`;

export const Logo = styled(Twitter)`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;

  > path {
    fill: var(--twitter);
  }
`;
