import { UpdateTaskStatusType } from './UpdateTaskStatusType';

import { privateInstance } from '@/apis/instance';

const updateTaskStatus = async ({ taskId, targetDate, status }: UpdateTaskStatusType) => {
	await privateInstance.patch(`/api/tasks/${taskId}/status`, {
		targetDate,
		status,
	});
};

export default updateTaskStatus;
