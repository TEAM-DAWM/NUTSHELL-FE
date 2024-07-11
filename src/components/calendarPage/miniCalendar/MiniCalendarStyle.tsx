import styled from '@emotion/styled';

const MiniCalendarStyle = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-items: center;
	width: 31.7rem;
	height: fit-content;
	padding-top: 1.6rem;
	overflow: hidden;

	border: 0;
	border: solid 1px ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;

	/* stylelint-disable selector-class-pattern */
	.react-datepicker__month-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.react-datepicker__month {
		display: flex;
		flex-wrap: wrap;
		place-content: center center;
		margin: 0;
		margin-bottom: 1.9rem;
		${({ theme }) => theme.fontTheme.CAPTION_04};
	}

	.react-datepicker__header {
		margin-bottom: 2rem;
		padding: 0;

		background-color: transparent;
		border: 0;
	}

	.react-datepicker__day-names {
		display: none;
	}

	/** 주 날짜 */
	.react-datepicker__week {
		display: flex;
		justify-content: center;
		width: 28rem;
	}

	.react-datepicker__day--today {
		background-color: ${({ theme }) => theme.palette.Grey.Grey2};
		box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.Grey.Grey6} inset;
	}

	/* 선택된 날짜 */
	.react-datepicker__day {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 3.2rem;
		margin: 0;

		border-radius: 8px;
	}

	.react-datepicker__day--keyboard-selected {
		background-color: transparent;
	}

	.react-datepicker__day--selected {
		background-color: ${({ theme }) => theme.palette.Primary};
		border-radius: 6px;
	}

	/* 이번 월에 포함되지 않는 날짜 */
	.react-datepicker__day--outside-month {
		color: ${({ theme }) => theme.palette.Grey.Grey4};
	}

	/* stylelint-enable selector-class-pattern */
`;

export default MiniCalendarStyle;
