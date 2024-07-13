import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import MiniCalendarHeader from './MiniCalendarHeader';
import MiniCalendarStyle from './MiniCalendarStyle';

interface MiniCalendarProps {
	selectDate: Date | null;
	onClickDate: (date: Date | null) => void;
}

function MiniCalendar({ selectDate, onClickDate }: MiniCalendarProps) {
	return (
		<DatePicker
			locale={ko}
			selected={selectDate}
			onChange={onClickDate}
			inline
			calendarContainer={MiniCalendarStyle}
			renderCustomHeader={(props) => <MiniCalendarHeader {...props} />}
		/>
	);
}
export default MiniCalendar;
