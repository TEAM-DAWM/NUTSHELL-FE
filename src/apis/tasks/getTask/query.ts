import { useQuery } from '@tanstack/react-query';

import getTasks from './axios';
import { GetTasksType } from './GetTasksType';

/** Task 리스트 조회 */
const useGetTasks = ({ isTotal, sortOrder, targetDate }: GetTasksType) =>
	useQuery({
		queryKey: ['today', isTotal, sortOrder, targetDate],
		queryFn: () => getTasks({ isTotal, sortOrder, targetDate }),
	});

export default useGetTasks;
