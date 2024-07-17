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

interface DateCorrectionModalProps {
	isDateOnly?: boolean;
	top?: number;
	left?: number;
	date: string | null;
	time: string | null;
	onClick: () => void;
	handleCurrentDate?: (newDate: Date) => void;
	handleCurrentTime?: (newTime: string) => void;
}

function DateCorrectionModal({
	isDateOnly = false,
	top = 0,
	left = 0,
	date,
	time,
	onClick,
	handleCurrentDate,
	handleCurrentTime,
}: DateCorrectionModalProps) {
	const prevDate = date ? new Date(date) : null;
	const [currentDate, setCurrentDate] = useState<Date | null>(prevDate);
	const [currentTime, setCurrentTime] = useState<string | null>(time);
	const dateTextRef = useRef<HTMLInputElement>(null);
	const timeTextRef = useRef<HTMLInputElement>(null);

	const onChange = (newDate: Date | null) => {
		setCurrentDate(newDate);
		if (dateTextRef.current) {
			const inputElement = dateTextRef.current.querySelector('input');
			if (inputElement) inputElement.value = formatDatetoString(newDate);
			blurRef(dateTextRef);
		}
	};
	const onTimeChange = (newTime: string | null) => {
		setCurrentTime(newTime);
	};
	/** 모달 확인, 닫기버튼 */
	const onSave = () => {
		if (handleCurrentDate && currentDate) handleCurrentDate(currentDate);
		if (handleCurrentTime && currentTime) handleCurrentTime(currentTime);
		onClick();
	};
	return (
		<DateCorrectionModalLayout top={top} left={left} onClick={(e) => e.stopPropagation()}>
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
					{!isDateOnly && (
						<TextboxInput
							variant="time"
							dateTextRef={timeTextRef}
							onTimeChange={onTimeChange}
							currentTime={currentTime}
						/>
					)}
					<TextBtn text="닫기" color="BLACK" size="small" mode="DEFAULT" isHover isPressed onClick={onSave} />
				</BottomBtnWrapper>
			</DatePicker>
		</DateCorrectionModalLayout>
	);
}

const DateCorrectionModalLayout = styled.div<{ top: number; left: number }>`
	position: absolute;
	top: ${({ top }) => top}rem;
	left: ${({ left }) => left}rem;
	z-index: 4;
`;

const BottomBtnWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: flex-end;
	width: 100%;
`;
export default DateCorrectionModal;
