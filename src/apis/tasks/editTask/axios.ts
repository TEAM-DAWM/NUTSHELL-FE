import { EditTaskDescriptionType } from './EditTaskDescriptionType';

import { privateInstance } from '@/apis/instance';

const editTaskDescription = async ({ taskId, name, description, deadLine }: EditTaskDescriptionType) => {
	const { date, time } = deadLine;
	const { data } = await privateInstance.patch(`/api/tasks/${taskId}`, {
		name,
		description,
		deadLine: {
			date,
			time,
		},
	});
	return data;
};

export default editTaskDescription;
