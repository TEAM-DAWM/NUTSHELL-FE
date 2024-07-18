import { useMutation, useQueryClient } from '@tanstack/react-query';

import CreateTimeBlock from './axios';
import { PostTimeBlokType } from './PostTimeBlockType';

const usePostTimeBlock = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ taskId, startDate, endDate }: PostTimeBlokType) => CreateTimeBlock({ taskId, startDate, endDate }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['timeblock'] }),
	});

	return { mutate: mutation.mutate };
};

export default usePostTimeBlock;
