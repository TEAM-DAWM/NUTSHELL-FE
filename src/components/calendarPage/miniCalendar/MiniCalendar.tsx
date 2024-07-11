import { ko } from 'date-fns/locale';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import MiniCalendarHeader from './MiniCalendarHeader';
import MiniCalendarStyle from './MiniCalendarStyle';

function MiniCalendar() {
	const [selectDate, setSelectDate] = useState<Date | null>(new Date());
	return (
		<DatePicker
			locale={ko}
			selected={selectDate}
			onChange={setSelectDate}
			inline
			calendarContainer={MiniCalendarStyle}
			renderCustomHeader={(props) => <MiniCalendarHeader {...props} />}
		/>
	);
}
export default MiniCalendar;
