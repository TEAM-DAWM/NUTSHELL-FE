import { ko } from 'date-fns/locale';
import { useRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import TextBtn from '../button/textBtn/TextBtn';
import ModalBackdrop from '../modal/ModalBackdrop';

import CustomHeader from './CustomHeader';
import CalendarStyle from './DatePickerStyle';

import formatDatetoString from '@/utils/formatDatetoString';
import { blurRef } from '@/utils/refStatus';

interface DatePickerCustomProps {
	isOpen: boolean;
	onClose: () => void;
	startDate: Date | null;
	endDate: Date | null;
	handleStartDate: (date: Date | null) => void;
	handleEndDate: (date: Date | null) => void;
}

function DatePickerCustom({
	isOpen,
	onClose,
	startDate,
	endDate,
	handleStartDate,
	handleEndDate,
}: DatePickerCustomProps) {
	const startDateTextRef = useRef<HTMLInputElement>(null);
	const endDateTextRef = useRef<HTMLInputElement>(null);

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
		handleStartDate(start);
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
		handleEndDate(end);
		blurRef(endDateTextRef);
	};

	/** 인풋에서 날짜 타이핑했을 경우 변경 */
	const onDateChange = (date: Date, mode: 'start' | 'end') => {
		if (mode === 'start') {
			blurRef(startDateTextRef);
			handleStartDate(date);
		} else {
			blurRef(endDateTextRef);
			handleEndDate(date);
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
				<ModalBackdrop onClick={onClose} />
			</>
		)
	);
}
export default DatePickerCustom;
