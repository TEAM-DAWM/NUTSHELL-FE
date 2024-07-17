import { useQuery } from '@tanstack/react-query';

import getTasks from './axios';
import { GetTasksResponse } from './GetTasksResponse';
import { GetTasksType } from './GetTasksType';

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

/** Task 리스트 조회 */
const useGetTasks = ({ isTotal, sortOrder, targetDate }: GetTasksType, placeholderData?: GetTasksResponse) =>
	useQuery({
		queryKey: ['today', isTotal, sortOrder, targetDate],
		queryFn: () => getTasks({ isTotal, sortOrder, targetDate }),
		placeholderData,
	});

export default useGetTasks;
