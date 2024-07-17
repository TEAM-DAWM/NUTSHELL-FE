import { useQuery } from '@tanstack/react-query';

import getTasksToday from './axios';
import { TasksTodayType } from './TasksTodayType';

/** TaskToday 리스트 조회 */
const useGetTasksToday = (type: TasksTodayType) =>
	useQuery({
		queryKey: ['dashboard', type],
		queryFn: () => getTasksToday(type),
	});

export default useGetTasksToday;
