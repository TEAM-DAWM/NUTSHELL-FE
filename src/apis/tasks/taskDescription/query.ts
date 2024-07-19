import { useQuery } from '@tanstack/react-query';

import taskDescription from './axios';
import { TaskDescriptionType } from './TaskDescriptionType';

// Task 상세 설명 조회
const useTaskDescription = ({ taskId, targetDate, isOpen }: TaskDescriptionType) => {
	const data = useQuery({
		queryKey: ['today', 'taskDesc', taskId, targetDate],
		queryFn: () => taskDescription({ taskId, targetDate }),
		enabled: isOpen,
	});

	console.log('상세설명조회 taskId, targetDate', taskId, targetDate);

	return data;
};
export default useTaskDescription;
