import { useMutation, useQueryClient } from '@tanstack/react-query';

import createTask from './axios';
import { CreateTaskType } from './CreateTaskType';
/** Task 추가 */
const useCreateTask = (clearTask: () => void) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ name, deadLine }: CreateTaskType) => createTask({ name, deadLine }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['today'] });
			clearTask(); // 성공했을 때 clearTask 호출
		},
	});

	return { mutate: mutation.mutate };
};

export default useCreateTask;
