import CategoryBox from '@/components/calendarPage/CategoryBox';
import MiniCalendar from '@/components/calendarPage/miniCalendar/MiniCalendar';
import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';

function Calendar() {
	return (
		<div>
			<MiniCalendar />
			<CategoryBox email="hongildong@gmail.com" categoryList={['내 할 일', '공부', '운동']} />
			<FullCalendarBox size="big" />
		</div>
	);
}
export default Calendar;
