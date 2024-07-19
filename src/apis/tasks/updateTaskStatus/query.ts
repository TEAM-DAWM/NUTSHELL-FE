import { useMutation, useQueryClient } from '@tanstack/react-query';

import updateTaskStatus from './axios';
import { UpdateTaskStatusType } from './UpdateTaskStatusType';

const useUpdateTaskStatus = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (updateData: UpdateTaskStatusType) => updateTaskStatus(updateData),
		onSuccess: (data, updateData) => {
			queryClient.invalidateQueries({ queryKey: ['today'] });
			if (updateData.status === '미완료') {
				queryClient.invalidateQueries({ queryKey: ['dashboard'] });
			}
			if (updateData.status === '진행 중' || updateData.status === '완료') {
				queryClient.invalidateQueries({ queryKey: ['dashboard', 'inprogress'] });
			}
		},
	});

	return { mutate: mutation.mutate, queryClient };
};

export default useUpdateTaskStatus;
