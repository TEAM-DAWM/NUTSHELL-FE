import CategoryBox from '@/components/calendarPage/CategoryBox';
import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';

function Calendar() {
	return (
		<div>
			<CategoryBox />
			<FullCalendarBox size="big" />
		</div>
	);
}
export default Calendar;
