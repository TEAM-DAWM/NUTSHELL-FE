import { useMutation, useQueryClient } from '@tanstack/react-query';

import updateTaskStatus from './axios';
import { UpdateTaskStatusType } from './UpdateTaskStatusType';

const useUpdateTaskStatus = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (updateData: UpdateTaskStatusType) => updateTaskStatus(updateData),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['today'] }),
	});

	return { mutate: mutation.mutate, queryClient };
};

export default useUpdateTaskStatus;
