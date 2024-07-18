import { useQuery } from '@tanstack/react-query';

import taskDescription from './axios';
import { TaskDescriptionType } from './taskDescriptionType';

// Task 상세 설명 조회
const useTaskDescription = ({ targetDate }: TaskDescriptionType) =>
	useQuery({
		queryKey: ['today', targetDate],
		queryFn: () => taskDescription({ targetDate }),
	});

export default useTaskDescription;
