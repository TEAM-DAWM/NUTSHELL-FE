import styled from '@emotion/styled';
import { ko } from 'date-fns/locale';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import TextBtn from '../button/textBtn/TextBtn';
import TextboxInput from '../textbox/TextboxInput';

import CorrectionCustomHeader from './CorrectionCustomHeader';
import CalendarStyle from './DatePickerStyle';

import formatDatetoString from '@/utils/formatDatetoString';
import { blurRef } from '@/utils/refStatus';

function DateCorrectionModal({ isDateOnly }: { isDateOnly: boolean }) {
	const prevDate: Date = new Date();
	const [currentDate, setCurrentDate] = useState<Date | null>(null);
	// const [time, setTime] = useState<string>('');
	const dateTextRef = useRef<HTMLInputElement>(null);
	const timeTextRef = useRef<HTMLInputElement>(null);
	const onChange = (date: Date | null) => {
		setCurrentDate(date);
		if (dateTextRef.current) {
			const inputElement = dateTextRef.current.querySelector('input');
			if (inputElement) inputElement.value = formatDatetoString(date);
			blurRef(dateTextRef);
		}
	};

	return (
		<DatePicker
			locale={ko}
			selected={currentDate}
			onChange={onChange}
			inline
			calendarContainer={CalendarStyle}
			renderCustomHeader={(props) => (
				<CorrectionCustomHeader {...props} prevDate={prevDate} dateTextRef={dateTextRef} onChange={onChange} />
			)}
		>
			<BottomBtnWrapper>
				{!isDateOnly && <TextboxInput variant="time" dateTextRef={timeTextRef} />}
				<TextBtn text="닫기" color="BLACK" size="small" mode="DEFAULT" isHover isPressed />
			</BottomBtnWrapper>
		</DatePicker>
	);
}
const BottomBtnWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: flex-end;
	width: 100%;
`;
export default DateCorrectionModal;
