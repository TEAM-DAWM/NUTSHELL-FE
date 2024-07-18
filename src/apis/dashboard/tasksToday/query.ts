import { useQuery } from '@tanstack/react-query';

import getTasksToday from './axios';
import { TasksTodayType } from './TasksTodayType';

const placeholderData = {
	code: 'success',
	data: {
		tasks: [
			{
				id: 1,
				name: 'task name',
				deadLine: {
					date: '2024-06-30',
					time: '12:30',
				},
			},
			{
				id: 2,
				name: 'task name',
				deadLine: {
					date: '2024-06-30',
					time: '12:30',
				},
			},
		],
	},
	message: null,
};

/** TaskToday 리스트 조회 */
const useGetTasksToday = (type: TasksTodayType) =>
	useQuery({
		queryKey: ['dashboard', type],
		queryFn: () => getTasksToday(type),
		placeholderData,
	});

export default useGetTasksToday;
