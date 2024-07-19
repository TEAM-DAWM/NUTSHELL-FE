import { TimeBlockData } from '@/apis/timeBlocks/getTimeBlock/GetTimeBlock';

interface EventData {
	title: string;
	start: string;
	end: string;
	allDay?: boolean;
	classNames: string;
	extendedProps: {
		taskId: number;
		timeBlockId: number | null;
	};
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
				extendedProps: {
					taskId: task.id,
					timeBlockId: timeBlock.id,
				},
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
				extendedProps: {
					taskId: -1, // 구글 캘린더 이벤트에는 taskId가 없으므로 -1로 설정
					timeBlockId: null,
				},
			});
		});
	});

	return events;
};

export default processEvents;
