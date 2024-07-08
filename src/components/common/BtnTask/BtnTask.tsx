import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import BtnDate from '../BtnDate/BtnDate';
import StatusDoneBtn from '../button/statusBtn/StatusDoneBtn';
import StatusInProgressBtn from '../button/statusBtn/StatusInProgressBtn';
import StatusStagingBtn from '../button/statusBtn/StatusStagingBtn';
import StatusTodoBtn from '../button/statusBtn/StatusTodoBtn';

import Icons from '@/assets/svg/index';

interface BtnTaskProps {
	btnType: number;
	status?: string;
	isDescription?: boolean;
}

interface BorderColorProps {
	isHovered: boolean;
	isClicked: boolean;
	iconHovered: boolean;
	theme: Theme;
	btnType: number;
}

function BtnTask(props: BtnTaskProps) {
	const { btnType, status, isDescription = false } = props;
	const [isClicked, setIsClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [iconHovered, setIconHovered] = useState(false);

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

	const renderStatusButton = () => {
		if (btnType === 3) {
			return <StagingIconHoverIndicator />;
		}

		if (!iconHovered) {
			return <IconHoverIndicator />;
		}

		if (btnType === 1) {
			return <StatusStagingBtn />;
		}

		if (btnType === 2) {
			if (status === 'Done') {
				return <StatusDoneBtn />;
			}
			if (status === 'InProgress') {
				return <StatusInProgressBtn />;
			}
			return <StatusTodoBtn />;
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
				<BtnTaskTextWrapper>
					{isDescription && <IconFile />}
					넛쉘 UT 진행하기
				</BtnTaskTextWrapper>
				{btnType === 3 ? (
					<BtnDate date="2024.07.11" time="22:22" size="small" isDelayed />
				) : (
					<BtnDate date="2024.07.11" time="22:22" size="small" />
				)}
			</BtnTaskContainer>
			<IconHoverContainer
				onClick={stopPropagation}
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
	let borderColor;

	if (btnType === 3) {
		borderColor = theme.palette.Orange.Orange8;
	} else if (iconHovered || isHovered) {
		borderColor = theme.palette.Blue.Blue1;
	} else if (isClicked) {
		borderColor = theme.palette.Primary;
	} else {
		borderColor = theme.palette.Grey.Grey1;
	}

	return css`
		border-color: ${borderColor};
	`;
};

const BtnTaskLayout = styled('div', { target: 'BtnTaskLayout' })<{
	isClicked: boolean;
	isHovered: boolean;
	iconHovered: boolean;
	btnType: number;
}>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 31rem;

	background: ${({ theme }) => theme.palette.Grey.White};
	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey1};
	border-radius: 8px;

	${getBorderColor}
`;

const BtnTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	align-items: flex-start;
	width: 100%;
	padding: 0.8rem 0 0.8rem 1.2rem;
`;

const BtnTaskTextWrapper = styled.div<{ isDescription: boolean }>`
	display: flex;
	gap: 4px;
	align-items: center;
	align-self: stretch;
	padding-left: ${({ isDescription }) => (isDescription ? '0rem' : '0.4rem')};

	${({ theme }) => theme.fontTheme.LABEL_03};
`;

const IconHoverContainer = styled('div', { target: 'IconHoverContainer' })`
	display: flex;
	gap: 4px;
	align-items: center;
	padding: 0 12px 0 8px;
`;

const IconHoverIndicator = styled(Icons.Icn_hover_indicator, { target: 'IconHoverIndicator' })`
	display: flex;
	gap: 6px;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
	padding: 3px;
`;

const StagingIconHoverIndicator = styled(Icons.Icn_hover_indicator)`
	display: flex;
	gap: 6px;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
	padding: 3px;

	circle {
		stroke: ${({ theme }) => theme.palette.Orange.Orange8};
	}
`;

const IconFile = styled(Icons.IcnFile)`
	width: 1.4rem;
	height: 1.4rem;
`;
