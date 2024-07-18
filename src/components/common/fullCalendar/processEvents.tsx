import { TimeBlockData } from '@/apis/timeBlocks/getTimeBlock/GetTimeBlock';

interface EventData {
	title: string;
	start: string;
	end: string;
	allDay?: boolean;
	classNames: string;
}

const processEvents = (timeBlockData: TimeBlockData): EventData[] => {
	const events: EventData[] = [];

	// tasks 데이터 처리
	timeBlockData.tasks.forEach((task) => {
		task.timeBlocks.forEach((timeBlock) => {
			events.push({
				title: task.name,
				start: timeBlock.startTime,
				end: timeBlock.endTime,
				classNames: 'tasks',
			});
		});
	});

	// googles 데이터 처리
	timeBlockData.googles.forEach((google) => {
		google.schedules.forEach((schedule) => {
			events.push({
				title: google.name,
				start: schedule.startTime,
				end: schedule.endTime,
				allDay: schedule.allDay,
				classNames: 'schedule',
			});
		});
	});

	return events;
};

export default processEvents;
