import { useMutation, useQueryClient } from '@tanstack/react-query';

import PatchTimeBlock from './axios';
import { PatchTimeBlokType } from './PatchTimeBlockType';

const usePatchTimeBlock = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ taskId, timeBlockId, startTime, endTime }: PatchTimeBlokType) =>
			PatchTimeBlock({ taskId, timeBlockId, startTime, endTime }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['timeblock'] }),
	});

	return { mutate: mutation.mutate };
};

export default usePatchTimeBlock;
