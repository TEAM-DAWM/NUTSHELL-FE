import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import DatePickerCustom from '../common/datePicker/DatePickerCustom';

import Icons from '@/assets/svg/index';
import formatDatetoString from '@/utils/formatDatetoString';

interface DateAreaProps {
	isHover: boolean;
	isPressed: boolean;
}

function DateArea({ isHover, isPressed }: DateAreaProps) {
	const today = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState<Date | null>();
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked((prev) => !prev);
	};
	const handleClickPastWeek = () => {
		const PastWeekEndDate = new Date(startDate);
		PastWeekEndDate.setDate(startDate.getDate() - 6);
		setEndDate(PastWeekEndDate);
	};
	const handleClickPastMonth = () => {
		const PastMonthEndDate = new Date(startDate);
		PastMonthEndDate.setDate(startDate.getDate() - 30);
		setEndDate(PastMonthEndDate);
	};
	useEffect(() => {
		const newEndDate = new Date(startDate);
		newEndDate.setDate(startDate.getDate() - 13);
		setEndDate(newEndDate);
		setStartDate(today);
	}, []);

	return (
		<DatePickerCustomLayout>
			<DateAreaLayout>
				<DatePickerContainer>
					<PlaceholderWrapper isHover={isHover} isPressed={isPressed} onClick={handleClick}>
						<StlyedCalendarIcon />
						<DateText>{formatDatetoString(endDate)}</DateText>
						<StyledArrowIcon />
						<DateText>{formatDatetoString(startDate)}</DateText>
					</PlaceholderWrapper>
					<DatePickerWrapper>
						<DatePickerCustom isOpen={isClicked} onClose={handleClick} />
					</DatePickerWrapper>
				</DatePickerContainer>
				<PastDateWrapper>
					<PastWeekBtn isHover={isHover} isPressed={isPressed} onClick={handleClickPastWeek}>
						지난 1주일
					</PastWeekBtn>
					<PastMonthBtn isHover={isHover} isPressed={isPressed} onClick={handleClickPastMonth}>
						지난 1달
					</PastMonthBtn>
				</PastDateWrapper>
			</DateAreaLayout>
		</DatePickerCustomLayout>
	);
}

export default DateArea;

const DatePickerCustomLayout = styled.div`
	display: flex;
`;

const DateAreaLayout = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: flex-end;
	justify-content: flex-start;
	width: 51.9rem;
	margin: 1rem 0 0.7rem 1.4rem;
`;

const DatePickerContainer = styled.div`
	position: relative;
	display: flex;
`;

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

const PastDateWrapper = styled.span`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	width: 14.3rem;
	height: 2.6rem;
`;

const PastWeekBtn = styled.button<{ isHover: boolean; isPressed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 7.4rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	color: ${({ theme }) => theme.fontTheme.CAPTION_02};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.palette.Grey.Black};
	border: 1px solid;
	border-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
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

const PastMonthBtn = styled.button<{ isHover: boolean; isPressed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.3rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	color: ${({ theme }) => theme.fontTheme.CAPTION_02};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.palette.Grey.Black};
	border: 1px solid;
	border-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
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

const DatePickerWrapper = styled.div`
	position: absolute;
	bottom: 4.6rem;
	left: 0;
`;
