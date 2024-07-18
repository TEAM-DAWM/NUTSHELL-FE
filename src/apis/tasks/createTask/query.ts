import { useMutation, useQueryClient } from '@tanstack/react-query';

import createTask from './axios';
import { CreateTaskType } from './CreateTaskType';
/** Task 추가 */
const useCreateTask = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ name, deadLine }: CreateTaskType) => createTask({ name, deadLine }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['today'] }),
	});

	return { mutate: mutation.mutate, queryClient };
};

export default useCreateTask;
