import styled from '@emotion/styled';

const CalendarStyle = styled.div`
	z-index: 5;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-items: center;
	width: 22.8rem;
	height: 27rem;
	padding: 1.6rem 0;
	overflow: auto;

	box-shadow: 0 3px 7px 0 rgb(0 0 0 / 38%);
	border: 0;
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
		gap: 0.6rem;
		margin: 0;
		margin-bottom: 1.9rem;
		${({ theme }) => theme.fontTheme.CAPTION_02};
	}

	/* 현재 달 안 보이게 */
	.react-datepicker__current-month {
		display: none;
	}

	.react-datepicker__header {
		padding: 0;

		background-color: transparent;
		border: 0;
	}

	.react-datepicker__day-names {
		margin-bottom: 0.7rem;
	}

	.react-datepicker__day-name {
		width: 2.8rem;
		margin: 0;

		color: ${({ theme }) => theme.palette.Grey.Grey5};
		${({ theme }) => theme.fontTheme.CAPTION_04};
	}

	/** 주 날짜 */
	.react-datepicker__week {
		display: flex;
		justify-content: center;
		width: 22rem;
	}

	/* 선택된 날짜 */
	.react-datepicker__day {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.8rem;
		height: 2.8rem;
		margin: 0;

		border-radius: 0;
	}

	.react-datepicker__day--keyboard-selected {
		background-color: transparent;
	}

	.react-datepicker__day--selected {
		background-color: ${({ theme }) => theme.palette.Primary};
		border-radius: 6px;
	}

	.react-datepicker__day--in-selecting-range {
		color: ${({ theme }) => theme.palette.Grey.Grey7};

		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
	}

	.react-datepicker__day--in-range {
		color: ${({ theme }) => theme.palette.Grey.Grey7};

		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
	}

	.react-datepicker__day--range-start,
	.react-datepicker__day--selecting-range-start,
	.react-datepicker__day--range-end {
		color: ${({ theme }) => theme.palette.Grey.White};

		background-color: ${({ theme }) => theme.palette.Primary};
		border-radius: 6px;
	}

	/* 이번 월에 포함되지 않는 날짜 */
	.react-datepicker__day--outside-month {
		color: ${({ theme }) => theme.palette.Grey.Grey4};
	}

	.react-datepicker__children-container {
		display: flex;
		justify-content: end;
		width: 20.4rem;
		margin: 0;
		padding: 0;
	}

	/* stylelint-enable selector-class-pattern */

	::-webkit-scrollbar {
		width: 0.6rem;
	}

	::-webkit-scrollbar-thumb {
		width: 0.6rem;

		background-color: ${({ theme }) => theme.palette.Grey.Grey6};
		visibility: hidden;
		border-radius: 3px;
	}

	&:hover::-webkit-scrollbar-thumb {
		visibility: visible;
	}
`;

export default CalendarStyle;
