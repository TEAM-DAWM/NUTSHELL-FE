import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import Icons from '@/assets/svg/index';
import StatusDoneBtn from '@/components/common/button/statusBtn/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/statusBtn/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/statusBtn/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/statusBtn/StatusTodoBtn';

type Props = { btnType: 'staging' | 'target' | 'delayed'; status: '진행중' | '미완료' | '완료' | '지연' };

function IconHoverContainer({ btnType, status }: Props) {
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
		if (btnType === 'delayed') {
			return <StagingIconHoverIndicator />;
		}

		if (!iconHovered && !iconClicked) {
			return <IconHoverIndicator />;
		}

		if (btnType === 'staging') {
			return <StatusStagingBtn />;
		}

		if (btnType === 'target') {
			switch (status) {
				case '완료':
					return <StatusDoneBtn />;
				case '진행중':
					return <StatusInProgressBtn />;
				default:
					return <StatusTodoBtn />;
			}
		}

		return null;
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
	padding: 0.3rem;
`;
const IconHoverIndicator = styled(Icons.Icn_hover_indicator, { target: 'IconHoverIndicator' })`
	${IconHoverCss}
`;

const StagingIconHoverIndicator = styled(Icons.Icn_hover_indicator)`
	${IconHoverCss}

	circle {
		stroke: ${({ theme }) => theme.palette.Orange.Orange8};
	}
`;
export default IconHoverContainer;
