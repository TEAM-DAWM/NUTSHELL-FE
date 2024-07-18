import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import TodayPlusBtn from '../button/TodayPlusBtn';

import Icons from '@/assets/svg/index';
import StatusDoneBtn from '@/components/common/button/statusBtn/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/statusBtn/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/statusBtn/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/statusBtn/StatusTodoBtn';

type Props = {
	iconType: 'stagingOrDelayed' | 'active';
	btnStatus?: string;
	status?: string;
	taskId: number;
};

function IconHoverContainer({ iconType, btnStatus, status, taskId }: Props) {
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
		if (status === '지연') {
			// 여기서 리턴하면 안됨. 이 경우엔 무조건 iconType === 'stagingOrDelayed' 이므로 호버 시 StatusStagingBtn가 떠야함
			if (iconHovered) {
				return <StatusStagingBtn taskId={taskId} />;
			}
			return <StagingIconHoverIndicator />;
		}

		if (!iconHovered && !iconClicked) {
			return <IconHoverIndicator />;
		}

		if (iconType === 'stagingOrDelayed') {
			return <StatusStagingBtn taskId={taskId} />;
		}

		if (iconType === 'active') {
			switch (btnStatus) {
				case '완료':
					return <StatusDoneBtn />;
				case '진행중':
					return <StatusInProgressBtn />;
				case '미완료':
					return <StatusTodoBtn />;
				default:
					return <TodayPlusBtn />;
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
