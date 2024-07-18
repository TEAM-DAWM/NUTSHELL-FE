import { useMutation, useQueryClient } from '@tanstack/react-query';

import CreateTimeBlock from './axios';
import { PostTimeBlokType } from './PostTimeBlockType';

const usePostTimeBlock = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ taskId, startTime, endTime }: PostTimeBlokType) => CreateTimeBlock({ taskId, startTime, endTime }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['timeblock'] }),
	});

	return { mutate: mutation.mutate };
};

export default usePostTimeBlock;
