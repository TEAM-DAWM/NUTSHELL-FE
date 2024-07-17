import axios from 'axios';

import { UpdateTaskStatusType } from './UpdateTaskStatusType';

const updateTaskStatus = async ({ taskId, targetDate, status }: UpdateTaskStatusType) => {
	await axios.patch(`/api/tasks/${taskId}`, {
		targetDate,
		status,
	});
};

export default updateTaskStatus;
