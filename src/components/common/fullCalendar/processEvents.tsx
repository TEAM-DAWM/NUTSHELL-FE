import { TimeBlockData } from '@/apis/timeBlocks/getTimeBlock/GetTimeBlock';

interface EventData {
	title: string;
	start: string;
	end: string;
	allDay?: boolean;
	classNames: string;
}

interface TasksEventData {
	taskId: number;
	timeBlockId: number;
	title: string;
	start: string;
	end: string;
	allDay?: boolean;
	classNames: string;
}

const processEvents = (timeBlockData: TimeBlockData): { events: EventData[]; taskEvents: TasksEventData[] } => {
	const events: EventData[] = [];
	const taskEvents: TasksEventData[] = [];

	// tasks 데이터 처리
	timeBlockData.tasks.forEach((task) => {
		task.timeBlocks.forEach((timeBlock) => {
			const taskEvent = {
				taskId: task.id,
				timeBlockId: timeBlock.id,
				title: task.name,
				start: timeBlock.startTime,
				end: timeBlock.endTime,
				classNames: 'tasks',
			};
			events.push(taskEvent);
			taskEvents.push(taskEvent);
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

	return { events, taskEvents };
};

export default processEvents;
