import { CreateTaskType } from './CreateTaskType';

import { privateInstance } from '@/apis/instance';

const createTask = async ({ name, deadLine }: CreateTaskType) => {
	const { date, time } = deadLine;
	const { data } = await privateInstance.post('/api/tasks', {
		name,
		deadLine: {
			date,
			time,
		},
	});
	return data;
};

export default createTask;
