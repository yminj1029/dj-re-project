import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;
// 자동 import를 사용하기 위해서 StyledButton을 렌더링해줌.
const Button = (props) => <StyledButton {...props}></StyledButton>;

export default Button;
