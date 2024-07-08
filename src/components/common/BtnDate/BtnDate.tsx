import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import BtnDateText, { TextWrapper } from './BtnDateText';

import Icons from '@/assets/svg/index';

interface BtnDateProps {
	date?: string;
	time?: string;
	size?: string;
}

function BtnDate(props: BtnDateProps) {
	const { date = '마감 기한', time = '마감 시간', size = 'big' } = props;
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
			isDefaultDate={isDefaultDate}
			isDefaultTime={isDefaultTime}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<BtnDateText icon={<CalanderIcon />} text={date} isDefault={isDefaultDate} size={size} />
			<LineIcon size={size} />
			<BtnDateText icon={<ClockIcon />} text={time} isDefault={isDefaultTime} size={size} />
			<XIcon isClicked={isClicked} />
		</BtnDateLayout>
	);
}

export default BtnDate;

const XIcon = styled((props: React.SVGProps<SVGSVGElement> & { isClicked: boolean }) => {
	const { isClicked, ...rest } = props;
	return <Icons.IcnXCricle {...rest} />;
})<{ isClicked: boolean }>`
	display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
	width: 2rem;
	height: 2rem;
`;

const CalanderIcon = styled(Icons.Icn_calander, { target: 'CalanderIcon' })`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
`;

const ClockIcon = styled(Icons.Icn_date_clock, { target: 'ClockIcon' })`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
`;

const LineIcon = styled(Icons.Icn_line, { target: 'LineIcon' })<{ size: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 0.1rem;
	height: ${({ size }) => (size === 'big' ? '2.2rem' : '1.2rem')};
`;

const BtnDateLayout = styled.div<{
	isPressed: boolean;
	isClicked: boolean;
	size: string;
	isDefaultDate: boolean;
	isDefaultTime: boolean;
}>`
	display: flex;
	gap: 1rem;
	align-items: center;
	width: fit-content;
	min-width: 1.8rem;
	padding: 0.5rem 1rem;

	background: ${({ theme }) => theme.palette.Grey.White};
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-color: ${({ isClicked, theme }) => (isClicked ? theme.palette.Primary : theme.palette.Grey.Grey3)};
	border-radius: 8px;

	${({ isClicked, size, theme }) =>
		isClicked &&
		css`
			padding-right: ${size === 'big' ? '0.6rem' : '0.2rem'};

			border-color: ${theme.palette.Primary};
			border-width: 2px;
		`}

	${({ isPressed, theme }) =>
		isPressed &&
		css`
			border-width: 0;

			${TextWrapper} {
				color: ${theme.palette.Grey.White};
			}
		`}

	&:hover {
		color: ${({ isPressed, theme }) => (isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey6)};

		background: ${({ isPressed, theme }) => (isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey3)};
		border-width: 0;

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
