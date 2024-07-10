import { ko } from 'date-fns/locale';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import TextBtn from '../button/textBtn/TextBtn';

import CustomHeader from './CustomHeader';
import CalendarStyle from './DatePickerStyle';

import formatDatetoString from '@/utils/formatDatetoString';
import { blurRef } from '@/utils/refStatus';

function DatePickerCustom() {
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(null);
	const startDateTextRef = useRef<HTMLInputElement>(null);
	const endDateTextRef = useRef<HTMLInputElement>(null);

	const onChange = (dates: [Date | null, Date | null]) => {
		const [start, end] = dates;
		setStartDate(start);
		blurRef(startDateTextRef);
		if (startDateTextRef.current) {
			startDateTextRef.current.value = formatDatetoString(start);
		}

		setEndDate(end);
		blurRef(endDateTextRef);
		if (endDateTextRef.current) {
			endDateTextRef.current.value = formatDatetoString(end);
		}
	};
	const onDateChange = (date: Date, mode: 'start' | 'end') => {
		if (mode === 'start') {
			blurRef(startDateTextRef);
			setStartDate(date);
		} else {
			blurRef(endDateTextRef);
			setEndDate(date);
		}
	};

	return (
		<DatePicker
			locale={ko}
			selected={startDate}
			onChange={onChange}
			startDate={startDate as Date | undefined}
			endDate={endDate as Date | undefined}
			selectsRange
			inline
			calendarContainer={CalendarStyle}
			renderCustomHeader={(props) => (
				<CustomHeader
					{...props}
					startDate={startDate}
					endDate={endDate}
					onChange={onDateChange}
					startDateTextRef={startDateTextRef}
					endDateTextRef={endDateTextRef}
				/>
			)}
		>
			<TextBtn text="닫기" color="BLACK" size="small" mode="DEFAULT" isHover isPressed />
		</DatePicker>
	);
}
export default DatePickerCustom;
