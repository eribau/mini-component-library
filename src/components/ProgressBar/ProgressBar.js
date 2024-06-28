/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		"--height": 8 + "px",
		"--border-radius": 4 + "px",
		"--bar-height": 8 + "px",
		"--bar-vertical-offset": 0 + "px",
		"--bar-horizontal-offset": 0 + "px",
	},
	medium: {
		"--height": 12 + "px",
		"--border-radius": 4 + "px",
		"--bar-height": 12 + "px",
		"--bar-vertical-offset": 0 + "px",
		"--bar-horizontal-offset": 0 + "px",
	},
	large: {
		"--height": 24 + "px",
		"--border-radius": 8 + "px",
		"--bar-height": 16 + "px",
		"--bar-vertical-offset": 4 + "px",
		"--bar-horizontal-offset": 4 + "px",
	}
}

const ProgressBar = ({ value, size }) => {
	const styles = SIZES[size];
  	return 	<Wrapper style={styles} value={value}>
			<VisuallyHidden>
				<label for="progressbar">Progress bar</label>
			</VisuallyHidden>
			<ProgressBarBase id="progressbar" value={value} aria-valuenow={value} max="100">{value}</ProgressBarBase>
		</Wrapper>;
};

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	height: var(--height);
	width: 370px;
	background: ${COLORS.transparentGray15};
	border-radius: var(--border-radius);
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	
	&::before {
		content: "";
		position: absolute;
		top: var(--bar-vertical-offset);
		left: var(--bar-horizontal-offset);
		height: var(--bar-height);
		width: calc(${props => props.value + "%"} - (var(--bar-vertical-offset) * 2));
		background: ${COLORS.primary};
		border-radius: 4px 0 0 4px;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		border-top-right-radius: max(${props => props.value + "%"} + var(--border-radius) - var(--bar-horizontal-offset) - 100%, 0px);
		border-bottom-right-radius: max(${props => props.value + "%"} + var(--border-radius) - var(--bar-horizontal-offset) - 100%, 0px);
	}
`;

const ProgressBarBase = styled.progress`
	opacity: 0;
`;

export default ProgressBar;
