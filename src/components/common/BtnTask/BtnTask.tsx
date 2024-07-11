import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import Icons from '@/assets/svg/index';
import BtnDate from '@/components/common/BtnDate/BtnDate';
import StatusDoneBtn from '@/components/common/button/statusBtn/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/statusBtn/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/statusBtn/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/statusBtn/StatusTodoBtn';
import { TaskType } from '@/types/tasks/taskType';

interface BtnTaskProps extends TaskType {
	btnType: 'staging' | 'target' | 'delayed';
}

interface BorderColorProps {
	isHovered: boolean;
	isClicked: boolean;
	iconHovered: boolean;
	theme: Theme;
	btnType: string;
}

function BtnTask(props: BtnTaskProps) {
	const { btnType, name, deadLine, hasDescription, status } = props;
	const [isClicked, setIsClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [iconHovered, setIconHovered] = useState(false);
	const [iconClicked, setIconClicked] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleClick = () => {
		setIsClicked((prev) => !prev);
	};

	const stopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleIconMouseEnter = () => {
		setIconHovered(true);
	};

	const handleIconMouseLeave = () => {
		setIconHovered(false);
	};

	const handleIconClick = (e: React.MouseEvent) => {
		if (iconClicked) {
			setIconClicked(false);
		} else {
			stopPropagation(e);
			setIconClicked(true);
		}
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
		<BtnTaskLayout
			isClicked={isClicked}
			isHovered={isHovered}
			iconHovered={iconHovered}
			btnType={btnType}
			onClick={handleClick}
		>
			<BtnTaskContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<BtnTaskTextWrapper isDescription={hasDescription}>
					{hasDescription && <IconFile />}
					{name}
				</BtnTaskTextWrapper>
				<BtnDate
					date={deadLine?.date}
					time={deadLine?.time}
					size={{ type: 'short' }}
					isDelayed={btnType === 'delayed'}
				/>
			</BtnTaskContainer>
			<IconHoverContainer
				onClick={handleIconClick}
				onMouseEnter={handleIconMouseEnter}
				onMouseLeave={handleIconMouseLeave}
			>
				{renderStatusButton()}
			</IconHoverContainer>
		</BtnTaskLayout>
	);
}

export default BtnTask;

const getBorderColor = ({ isHovered, isClicked, iconHovered, theme, btnType }: BorderColorProps) => {
	const defaultColor = theme.palette.Grey.Grey1;
	const hoverColor = theme.palette.Blue.Blue1;
	const clickColor = theme.palette.Primary;
	const orangeColor = theme.palette.Orange.Orange8;
	let borderColor = defaultColor;
	if (btnType === 'delayed') {
		borderColor = orangeColor;
	} else if (iconHovered || isHovered) {
		borderColor = hoverColor;
	} else if (isClicked) {
		borderColor = clickColor;
	}
	return css`
		border-color: ${borderColor};
	`;
};

const BtnTaskLayout = styled('div', { target: 'BtnTaskLayout' })<{
	isClicked: boolean;
	isHovered: boolean;
	iconHovered: boolean;
	btnType: string;
}>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 31rem;

	background: ${({ theme }) => theme.palette.Grey.White};
	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey1};
	border-radius: 8px;

	${getBorderColor}
`;

const BtnTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	align-items: flex-start;
	width: 100%;
	padding: 0.8rem 0 0.8rem 1.2rem;
`;

const BtnTaskTextWrapper = styled.div<{ isDescription: boolean }>`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	align-self: stretch;
	padding-left: ${({ isDescription }) => (isDescription ? '0rem' : '0.4rem')};

	${({ theme }) => theme.fontTheme.LABEL_03};
`;

const IconHoverContainer = styled('div', { target: 'IconHoverContainer' })`
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

const IconFile = styled(Icons.IcnFile)`
	width: 1.4rem;
	height: 1.4rem;
`;
