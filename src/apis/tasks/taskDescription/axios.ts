import { TaskDescriptionType } from './taskDescriptionType';

import { privateInstance } from '@/apis/instance';

const taskDescription = async ({ taskId, targetDate }: TaskDescriptionType) => {
	await privateInstance.get(`/api/tasks/${taskId}`, {
		targetDate,
	});
};

export default taskDescription;
