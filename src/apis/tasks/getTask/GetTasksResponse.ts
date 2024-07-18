import { TaskType } from '@/types/tasks/taskType';

export interface GetTasksResponse {
	code: string;
	data: {
		tasks: TaskType[];
	};
	message: string | null;
}
