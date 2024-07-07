import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import BtnDateNonClick from './BtnDate/BtnDateNonClick';

import Icons from '@/assets/svg/index';

interface BtnTaskProps {
	status: string;
}

function BtnTask({ status }: BtnTaskProps) {
	const [isClicked, setIsClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

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

	return (
		<BtnTaskLayout isClicked={isClicked} isHovered={isHovered} onClick={handleClick}>
			<BtnTaskContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<BtnTaskTextWrapper>넛쉘 UT 진행하기</BtnTaskTextWrapper>
				<BtnDateNonClick date="2024.07.11" time="22:22" size="small" />
			</BtnTaskContainer>
			<IconHoverContainer onClick={stopPropagation}>
				<IconHoverIndicator />
			</IconHoverContainer>
		</BtnTaskLayout>
	);
}

export default BtnTask;

const BtnTaskLayout = styled('div', { target: 'BtnTaskLayout' })<{ isClicked: boolean; isHovered: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 31rem;

	background: ${({ theme }) => theme.palette.white};
	border: 1px solid ${({ theme, isClicked }) => (isClicked ? theme.palette.primary : theme.palette.grey1)};
	border-radius: 8px;

	${({ isHovered, theme, isClicked }) =>
		isHovered &&
		css`
			background-color: ${theme.palette.blue1};
			border-color: ${isClicked ? theme.palette.primary : theme.palette.blue1};
		`}
`;

const BtnTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	align-items: flex-start;
	width: 100%;
	padding: 0.8rem 0 0.8rem 1.2rem;
`;

const BtnTaskTextWrapper = styled.div`
	padding-left: 0.4rem;
	${({ theme }) => theme.fontTheme.LABEL_03};
`;

const IconHoverContainer = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
	padding: 0 12px 0 8px;

	&:hover {
		background-color: ${({ theme }) => theme.palette.black};
	}
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
