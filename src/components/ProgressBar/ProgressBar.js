/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		"--height": 8 + "px",
		"--border-radius": 4 + "px",
	},
	medium: {
		"--height": 12 + "px",
		"--border-radius": 4 + "px",
	},
	large: {
		"--height": 24 + "px",
		"--border-radius": 8 + "px",
	}
}

const ProgressBar = ({ value, size }) => {
	const styles = SIZES[size];
  	return 	<Wrapper style={styles} value={value}>
			<ProgressBarBase value={value} max="100">{value}</ProgressBarBase>
		</Wrapper>;
};

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	height: var(--height);
	width: 370px;
	background: ${COLORS.transparentGray15};
	border-radius: var(--border-radius);
	
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: ${props => props.value + "%"};
		background: ${COLORS.primary};
	}
`;

const ProgressBarBase = styled.progress`
	opacity: 0;
`;

export default ProgressBar;
