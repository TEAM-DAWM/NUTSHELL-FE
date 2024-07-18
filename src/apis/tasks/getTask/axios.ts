import { isAxiosError } from 'axios';

import { GetTasksType } from './GetTasksType';

import { privateInstance } from '@/apis/instance';

const getTasks = async ({ isTotal, sortOrder, targetDate }: GetTasksType) => {
	try {
		const { data } = await privateInstance.get('/api/tasks', {
			params: {
				isTotal,
				order: sortOrder,
				targetDate,
			},
		});
		return data;
	} catch (error) {
		if (isAxiosError(error)) {
			console.log('Axios error occurred:', error.message);
		} else {
			throw new Error('An unexpected error occurred');
		}
		return null;
	}
};

export default getTasks;
