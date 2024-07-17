import { GetTasksType } from './GetTasksType';

import { privateInstance } from '@/apis/instance';

const getTasks = async ({ isTotal, sortOrder, targetDate }: GetTasksType) => {
	const { data } = await privateInstance.get('/api/tasks', {
		params: {
			isTotal,
			sortOrder,
			targetDate,
		},
	});
	return data;
};

export default getTasks;
