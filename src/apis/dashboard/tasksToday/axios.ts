import { TasksTodayType } from './TasksTodayType';

import { privateInstance } from '@/apis/instance';

const getTasksToday = async (type: TasksTodayType) => {
	const { data } = await privateInstance.get('/api/tasks/today', {
		params: {
			type,
		},
	});
	return data;
};

export default getTasksToday;
