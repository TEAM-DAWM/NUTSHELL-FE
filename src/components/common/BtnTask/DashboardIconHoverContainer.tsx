import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import StatusInProgressBtn from '../button/statusBtn/StatusInProgressBtn';
import TodayPlusBtn from '../button/TodayPlusBtn';

import Icons from '@/assets/svg/index';

type Props = {
	dashBoardInprogress: boolean;
	// taskId: number;
	// targetDate?: string | null;
};

function DashboardIconHoverContainer({ dashBoardInprogress }: Props) {
	const [iconHovered, setIconHovered] = useState(false);
	const [iconClicked, setIconClicked] = useState(false);

	const handleIconMouseEnter = () => {
		setIconHovered(true);
	};
	const handleIconMouseLeave = () => {
		setIconHovered(false);
	};
	const stopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleIconClick = (e: React.MouseEvent) => {
		if (iconClicked) {
			setIconClicked(false);
		} else {
			setIconClicked(true);
		}
		stopPropagation(e);
	};

	const renderStatusButton = () => {
		if (!iconHovered && !iconClicked) {
			return <IconHoverIndicator />;
		}

		if (dashBoardInprogress) {
			return <StatusInProgressBtn />;
		}

		return <TodayPlusBtn />;
	};

	return (
		<IconHoverLayout onClick={handleIconClick} onMouseEnter={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>
			{renderStatusButton()}
		</IconHoverLayout>
	);
}

const IconHoverLayout = styled('div', { target: 'IconHoverContainer' })`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	padding: 0 1.2rem 0 0.8rem;
`;

const IconHoverCss = css`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
`;

const IconHoverIndicator = styled(Icons.Icn_hover_indicator, { target: 'IconHoverIndicator' })`
	${IconHoverCss}
`;

export default DashboardIconHoverContainer;
