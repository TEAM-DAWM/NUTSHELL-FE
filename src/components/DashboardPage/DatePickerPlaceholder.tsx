import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import formatDatetoString from '@/utils/formatDatetoString';

interface DatePickerPlaceholderProps {
	isHover: boolean;
	isPressed: boolean;
	startDate: Date | null;
	endDate: Date | null;
	handleClick: () => void;
}

function DatePickerPlaceholder({ isHover, isPressed, startDate, endDate, handleClick }: DatePickerPlaceholderProps) {
	return (
		<PlaceholderWrapper isHover={isHover} isPressed={isPressed} onClick={handleClick}>
			<StlyedCalendarIcon />
			<DateText>{formatDatetoString(startDate)}</DateText>
			<StyledArrowIcon />
			<DateText>{formatDatetoString(endDate)}</DateText>
		</PlaceholderWrapper>
	);
}

export default DatePickerPlaceholder;

const PlaceholderWrapper = styled.div<{ isHover: boolean; isPressed: boolean }>`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 4rem;
	padding: 0.4rem 1.2rem;

	background-color: ${({ theme }) => theme.textButton.WHITE.DEFAULT.BG};
	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
	${({ theme }) => theme.fontTheme.BODY_02};

	${({ isHover, theme }) =>
		isHover &&
		css`
			&:hover {
				color: ${theme.textButton.WHITE.HOVER.TEXT};

				background-color: ${theme.textButton.WHITE.HOVER.BG};
			}
		`}
	${({ isPressed, theme }) =>
		isPressed &&
		css`
			&:active {
				color: ${theme.textButton.WHITE.PRESSED.TEXT};

				background-color: ${theme.textButton.WHITE.PRESSED.BG};
			}
		`}
`;

const DateText = styled.p`
	padding: 0.5rem 1.6rem;

	color: ${({ theme }) => theme.textButton.WHITE.DEFAULT.TEXT};
	${({ theme }) => theme.fontTheme.BODY_02};
`;

const StlyedCalendarIcon = styled(Icons.Icn_calander)`
	width: 2rem;
	height: 2rem;

	path {
		stroke: ${({ theme }) => theme.palette.Grey.Grey5};
	}
`;

const StyledArrowIcon = styled(Icons.Icn_arrow_narrow_right)`
	width: 2.4rem;
	height: 2.4rem;

	path {
		stroke: ${({ theme }) => theme.palette.Grey.Black};
	}
`;
