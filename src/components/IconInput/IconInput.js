import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--icon-size": 16,
    "--height": 24 + "px",
    "--underline-thickness": 1 + "px",
    "--font-size": 14 + "px",
  },
  large: {
    "--icon-size": 24,
    "--height": 36 + "px",
    "--underline-thickness": 2 + "px",
    "--font-size": 18 + "px",
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  return <Wrapper style={styles} width={width}>
    <VisuallyHidden>
      <label for="input">
        {label}
      </label>
    </VisuallyHidden>
    <InputIcon id={icon} size={styles["--icon-size"]}></InputIcon>
    <Input type="text" id="input" placeholder={placeholder}></Input>
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  height: var(--height);
  width: ${props => props.width + "px"};
  border-bottom-width: var(--underline-thickness);
  border-bottom-style: solid;
  border-bottom-color: black;
  display: flex;
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  isolation: isolate;
  z-index: 1;

  & > input {
    padding-left: var(--height);
  }

  &:hover{
    color: black;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-weight: 700;
  color: inherit;
  z-index: 1;
`;

const Input = styled.input`
  appearance: none;
  border: none;
  background-color: transparent;
  height: inherit;
  width: inherit;
  font-weight: 700;
  font-size: inherit;
  color: inherit;
  z-index: 2;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
