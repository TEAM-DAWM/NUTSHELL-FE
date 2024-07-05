import styled from '@emotion/styled';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const TimelineBox = () => {
	return (
		<FullCalendarLayout>
			<FullCalendar
				initialView="timeGridWeek"
				plugins={[timeGridPlugin, dayGridPlugin]}
				headerToolbar={{
					left: 'title',
					center: 'today,prev,next timeGridDay,timeGridWeek,dayGridMonth',
					right: 'dayGridMonth',
				}}
				locale="ko"
			/>
		</FullCalendarLayout>
	);
};

const FullCalendarLayout = styled.div`
	width: 57.9rem;
`;

export default TimelineBox;
