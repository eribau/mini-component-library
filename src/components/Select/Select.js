import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
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
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;

`;

const SelectBase = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-heigth: inherit;
`;

export default Select;
