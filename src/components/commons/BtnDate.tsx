import styled from '@emotion/styled';
import { useState } from 'react';

import Icons from '@/assets/svg/index';

interface BtnDateProps {
	date?: string;
	time?: string;
	size?: string;
}

const BtnDate = (props: BtnDateProps) => {
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
			<BtnDateContainer>
				<CalanderIcon />
				<TextWrapper isDefault={isDefaultDate} size={size}>
					{date}
				</TextWrapper>
			</BtnDateContainer>
			<LineIcon size={size} />
			<BtnDateContainer>
				<ClockIcon />
				<TextWrapper isDefault={isDefaultTime} size={size}>
					{time}
				</TextWrapper>
			</BtnDateContainer>
			<XIcon isClicked={isClicked} />
		</BtnDateLayout>
	);
};

export default BtnDate;

const XIcon = styled((props: React.SVGProps<SVGSVGElement> & { isClicked: boolean }) => {
	const { isClicked, ...rest } = props;
	return <Icons.IcnXCricle {...rest} />;
})<{ isClicked: boolean }>`
	width: 2rem;
	height: 2rem;
	display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
`;

const CalanderIcon = styled(Icons.Icn_calander, { target: 'CalanderIcon' })`
	display: flex;
	width: 1.4rem;
	height: 1.4rem;
	justify-content: center;
	align-items: center;
`;

const ClockIcon = styled(Icons.Icn_date_clock, { target: 'ClockIcon' })`
	display: flex;
	width: 1.4rem;
	height: 1.4rem;
	justify-content: center;
	align-items: center;
`;

const LineIcon = styled(Icons.Icn_line, { target: 'LineIcon' })<{ size: string }>`
	display: flex;
	width: 0.1rem;
	height: ${({ size }) => (size === 'big' ? '2.2rem' : '1.2rem')};
	justify-content: center;
	align-items: center;
`;

const TextWrapper = styled('div', { target: 'TextWrapper' })<{ isDefault: boolean; size: string }>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	color: ${({ isDefault, theme }) => (isDefault ? theme.palette.grey5 : theme.palette.black)};
	font-size: ${({ size }) => (size === 'big' ? '1.4rem' : '1.2rem')};
`;

const BtnDateContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.4rem;
`;

const BtnDateLayout = styled.div<{
	isPressed: boolean;
	isClicked: boolean;
	size: string;
	isDefaultDate: boolean;
	isDefaultTime: boolean;
}>`
	display: flex;
	width: fit-content;
	min-width: 1.8rem;
	padding: 0.5rem 1rem;
	gap: 1rem;
	align-items: center;
	border-radius: 0.8rem;
	border: 0.1rem solid ${({ theme }) => theme.palette.grey3};
	background: ${({ theme }) => theme.palette.white};
	cursor: pointer;
	border-color: ${({ isClicked, theme }) => (isClicked ? theme.palette.primary : theme.palette.grey3)};

	${({ isPressed }) =>
		isPressed &&
		`
		border-width: 0rem;
	`}

	${({ isClicked, size, theme }) =>
		isClicked &&
		`
		padding-right: ${size === 'big' ? '0.6rem' : '0.2rem'};
		border-width: 0.2rem;
		border-color: ${theme.palette.primary};
	`}

	&:hover {
		background: ${({ isPressed, theme }) => (isPressed ? theme.palette.grey5 : theme.palette.grey4)};
		color: ${({ isPressed, theme }) => (isPressed ? theme.palette.white : theme.palette.grey6)};
		border-width: 0rem;

		${TextWrapper} {
			color: ${({ isDefaultDate, isDefaultTime, theme }) =>
				isDefaultDate || isDefaultTime ? theme.palette.grey6 : theme.palette.black};
		}
	}

	${({ isPressed, theme }) =>
		isPressed &&
		`
		${TextWrapper} {
			color: ${theme.palette.white};
		}
	`}

	&:hover ${CalanderIcon}, &:hover ${ClockIcon}, &:hover ${LineIcon} {
		path {
			stroke: ${({ isPressed, theme }) => (isPressed ? theme.palette.grey4 : theme.palette.grey5)};
		}
		line {
			stroke: ${({ isPressed, theme }) => (isPressed ? theme.palette.grey4 : theme.palette.grey5)};
		}
	}
`;
