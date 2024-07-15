import { ko } from 'date-fns/locale';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import TextBtn from '../button/textBtn/TextBtn';

import CustomHeader from './CustomHeader';
import CalendarStyle from './DatePickerStyle';

import formatDatetoString from '@/utils/formatDatetoString';
import { blurRef } from '@/utils/refStatus';
import ModalBackdrop from '../modal/ModalBackdrop';

interface DatePickerCustomProps {
	isOpen: boolean;
	onClose: () => void;
}

function DatePickerCustom({ isOpen, onClose }: DatePickerCustomProps) {
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(null);
	const startDateTextRef = useRef<HTMLInputElement>(null);
	const endDateTextRef = useRef<HTMLInputElement>(null);
	console.log(isOpen);

	// 초기값 이주 전으로 설정
	useEffect(() => {
		if (startDate) {
			const newEndDate = new Date(startDate);
			newEndDate.setDate(startDate.getDate() - 13);
			setEndDate(newEndDate);
			if (endDateTextRef.current) {
				const inputElement = endDateTextRef.current.querySelector('input');
				if (inputElement) inputElement.placeholder = formatDatetoString(newEndDate);
			}
		}
	}, []);

	/** ref 안에 Input DOM 있는지 검사하고 있다면 반환, 없으면 false 반환 */
	const inputElementOfRef = (ref: React.RefObject<HTMLInputElement>) => {
		if (ref.current) {
			const inputElement = ref.current.querySelector('input');
			if (inputElement) {
				return inputElement;
			}
		}
		return false;
	};

	/** 캘린더에서 날짜 선택할 경우 변경 */
	const onChange = (dates: [Date | null, Date | null]) => {
		const [start, end] = dates;
		setStartDate(start);
		blurRef(startDateTextRef);
		// 캘린더에서 선택한 시작시간 인풋에 반영
		const startInputEle = inputElementOfRef(startDateTextRef);
		if (startInputEle) {
			startInputEle.value = formatDatetoString(start);
		}

		const endInputEle = inputElementOfRef(endDateTextRef);
		// 시작 날짜는 있고 마감 날짜는 없을 경우
		if (start && end === null) {
			if (endInputEle) {
				endInputEle.value = '';
				endInputEle.placeholder = '마감 날짜';
			}
		}

		// 캘린더에서 선택한 마감시간 인풋에 반영
		if (endInputEle) endInputEle.value = formatDatetoString(end);
		setEndDate(end);
		blurRef(endDateTextRef);
	};

	/** 인풋에서 날짜 타이핑했을 경우 변경 */
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
		isOpen && (
			<>
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
					<TextBtn text="닫기" color="BLACK" size="small" mode="DEFAULT" isHover isPressed onClick={onClose} />
				</DatePicker>
				<ModalBackdrop onClick={onClose}></ModalBackdrop>
			</>
		)
	);
}
export default DatePickerCustom;
