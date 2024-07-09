import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import BtnDateText, { TextWrapper } from './BtnDateText';

import Icons from '@/assets/svg/index';

interface BtnDateProps {
	date?: string;
	time?: string;
	size?: string;
	isDelayed?: boolean;
	isDisabled?: boolean;
}

function BtnDate(props: BtnDateProps) {
	const { date = '마감 기한', time = '마감 시간', size = 'big', isDelayed = false, isDisabled = false } = props;
	const [isPressed, setIsPressed] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleMouseDown = () => {
		setIsPressed(true);
	};

	const handleMouseUp = () => {
		setIsPressed(false);
		setIsClicked((prev) => !prev);
	};

	const isDefaultDate = date === '마감 기한';
	const isDefaultTime = time === '마감 시간';

	return (
		<BtnDateLayout
			isPressed={isPressed}
			isClicked={isClicked}
			size={size}
			isDelayed={isDelayed}
			isDisabled={isDisabled}
			isDefaultDate={isDefaultDate}
			isDefaultTime={isDefaultTime}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<BtnDateText icon={<CalanderIcon isDelayed={isDelayed} />} text={date} isDefault={isDefaultDate} size={size} />
			<LineIcon size={size} isDelayed={isDelayed} />
			<BtnDateText icon={<ClockIcon isDelayed={isDelayed} />} text={time} isDefault={isDefaultTime} size={size} />
			<XIcon isClicked={isClicked} size={size} />
		</BtnDateLayout>
	);
}

export default BtnDate;

const XIcon = styled((props: React.SVGProps<SVGSVGElement> & { isClicked: boolean; size: string }) => {
	const { isClicked, ...rest } = props;
	return <Icons.IcnXCricle {...rest} />;
})<{ isClicked: boolean }>`
	display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
	width: ${({ size }) => (size === 'big' ? '2rem' : '1.6rem')};
	height: ${({ size }) => (size === 'big' ? '2rem' : '1.6rem')};
`;

const CalanderIcon = styled(Icons.Icn_calander, { target: 'CalanderIcon' })<{ isDelayed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;

	path {
		stroke: ${({ isDelayed, theme }) => (isDelayed ? theme.palette.Orange.Orange4 : theme.palette.Grey.Grey4)};
	}
`;

const ClockIcon = styled(Icons.Icn_date_clock, { target: 'ClockIcon' })<{ isDelayed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;

	path {
		stroke: ${({ isDelayed, theme }) => (isDelayed ? theme.palette.Orange.Orange4 : theme.palette.Grey.Grey4)};
	}
`;

const LineIcon = styled(Icons.Icn_line, { target: 'LineIcon' })<{ size: string; isDelayed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 0.1rem;
	height: ${({ size }) => (size === 'big' ? '2.2rem' : '1.2rem')};

	line {
		stroke: ${({ isDelayed, theme }) => (isDelayed ? theme.palette.Orange.Orange5 : theme.palette.Grey.Grey4)};
	}
`;

const BtnDateLayout = styled.div<{
	isPressed: boolean;
	isClicked: boolean;
	size: string;
	isDelayed: boolean;
	isDefaultDate: boolean;
	isDefaultTime: boolean;
	isDisabled: boolean;
}>`
	display: flex;
	gap: 1rem;
	align-items: center;
	width: fit-content;
	min-width: 1.8rem;
	height: ${({ size }) => (size === 'big' ? '3.2rem' : '2rem')};
	padding: ${({ size }) => (size === 'big' ? '0.5rem 1rem' : '0rem 1rem')};

	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-color: ${({ isClicked, theme }) => (isClicked ? theme.palette.Primary : theme.palette.Grey.Grey3)};
	border-radius: 8px;

	${({ isDelayed, theme }) =>
		isDelayed &&
		css`
			background: ${theme.palette.Orange.Orange1};
			border-color: ${theme.palette.Orange.Orange5};

			pointer-events: none;
		`}

	${({ isClicked, size, theme }) =>
		isClicked &&
		css`
			padding-right: ${size === 'big' ? '0.6rem' : '0.2rem'};

			border-color: ${theme.palette.Primary};
			border-width: ${size === 'big' ? '2px' : '1px'};
		`}

	${({ isPressed, theme }) =>
		isPressed &&
		css`
			${TextWrapper} {
				color: ${theme.palette.Grey.White};
			}
		`}

	${({ isDisabled }) =>
		isDisabled &&
		css`
			cursor: default;
			opacity: 0.6;

			pointer-events: none;
		`}

	&:hover {
		color: ${({ isPressed, theme }) => (isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey6)};

		background: ${({ isPressed, theme }) => (isPressed ? theme.palette.Grey.Grey5 : theme.palette.Grey.Grey4)};
		box-shadow: ${({ isPressed, theme }) =>
			isPressed ? `1px 0 0 0 ${theme.palette.Grey.Grey5} inset` : `1px 0 0 0 ${theme.palette.Grey.Grey4} inset`};

		${TextWrapper} {
			color: ${({ isDefaultDate, isDefaultTime, theme }) =>
				isDefaultDate || isDefaultTime ? theme.palette.Grey.Grey6 : theme.palette.Grey.Black};
		}
	}

	&:hover ${CalanderIcon}, &:hover ${ClockIcon}, &:hover ${LineIcon} {
		path {
			stroke: ${({ isPressed, theme }) => (isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey5)};
		}

		line {
			stroke: ${({ isPressed, theme }) => (isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey5)};
		}
	}
`;
