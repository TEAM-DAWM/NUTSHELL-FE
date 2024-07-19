import { useQuery } from '@tanstack/react-query';

import getTasksToday from './axios';
import { TasksTodayType } from './TasksTodayType';

const placeholderData = {
	code: 'success',
	data: {
		tasks: [],
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
