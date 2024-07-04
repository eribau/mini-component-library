import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper textLength={displayedValue.length}>
      <SelectBase value={value} onChange={onChange}>
        {children}
      </SelectBase> 
      <Icon id="chevron-down"></Icon>
    </Wrapper> 
  );
};

const Wrapper = styled.div`
    height: 43px;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    width: ${props => "calc(" + props.textLength + "ch + 48px)"};
    display: flex;
    position: relative;

    & > div {
      font-weight: 700;
      position: absolute;
      top: 9.5px;
      right: 12px;
      z-index: -1;
    }
    `;

const SelectBase = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0px 36px 0 12px;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: inherit;
  color: ${COLORS.gray700};
  cursor: inherit;
  line-heigth: inherit;

  &:focus {
    border-radius: inherit;
  }

  &:hover {
    color: black;
  }
`;

export default Select;
