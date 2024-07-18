import { useMutation, useQueryClient } from '@tanstack/react-query';

import deleteTask from './axios';

/** Task 삭제 */
const useDeleteTask = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (taskId: number) => deleteTask(taskId),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['today'] }),
	});

	return { mutate: mutation.mutate };
};

export default useDeleteTask;
