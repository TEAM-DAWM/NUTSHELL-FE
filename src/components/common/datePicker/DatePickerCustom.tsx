import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import TextBtn from '../button/TextBtn';

function DatePickerCustom() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState<Date | undefined>();
	const onChange = (dates: [Date, Date]) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};
	return (
		<CustomPicker
			locale={ko}
			selected={startDate}
			onChange={onChange}
			startDate={startDate}
			endDate={endDate}
			selectsRange
			inline
			calendarContainer={Calendar}
		>
			<TextBtn text="닫기" color="black" size="small" isLight={false} />
		</CustomPicker>
	);
}
const spreadStyle = css`
	display: flex;
	justify-content: space-between;
	width: 20.4rem;
`;

const CustomPicker = styled(({ className, ...props }) => <DatePicker {...props} wrapperClassName={className} />)`
	width: 100%;
`;

const Calendar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 22.8rem;
	overflow: hidden;

	box-shadow: 0 3px 7px 0 rgb(0 0 0 / 38%);
	border-radius: 12px;

	.react-datepicker__month-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* 현재 달 안 보이게 */
	.react-datepicker__current-month {
		display: none;
	}

	/* 화살표 */
	.react-datepicker__navigation {
		/* display: block; */
	}

	.react-datepicker__header {
		padding-bottom: 0.7rem;

		background-color: transparent;
		border: 0;
	}

	/* 요일 글자 */
	.react-datepicker__day-names {
		${spreadStyle}
	}

	.react-datepicker__day-name {
		color: ${({ theme }) => theme.palette.Grey.Grey5};
		${({ theme }) => theme.fontTheme.CAPTION_04};
	}

	/* 달 영역 */
	.react-datepicker__month {
		${({ theme }) => theme.fontTheme.CAPTION_02};
		display: flex;
		place-content: center center;
		flex-wrap: wrap;
		gap: 0.7rem;
		align-items: center;
		align-self: stretch;
	}

	/** 주 날짜 */
	.react-datepicker__week {
		${spreadStyle}
	}

	/* 선택된 날짜 */
	.react-datepicker__day {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.2rem;
		height: 2.2rem;
		margin: 0;
	}

	.react-datepicker__day--selected {
		background-color: ${({ theme }) => theme.palette.Primary};
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
	}

	/* 이번 월에 포함되지 않는 날짜 */
	.react-datepicker__day--outside-month {
		color: ${({ theme }) => theme.palette.Grey.Grey4};
	}
`;

export default DatePickerCustom;
