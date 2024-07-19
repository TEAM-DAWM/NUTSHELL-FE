import { useMutation, useQueryClient } from '@tanstack/react-query';

import deleteTimeBlock from './axios';
import { DeleteTimeBlockType } from './DeleteTimeBlockType';

/** TimeBlock 삭제 */
const useDeleteTimeBlock = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: ({ taskId, timeBlockId }: DeleteTimeBlockType) => deleteTimeBlock({ taskId, timeBlockId }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['timeblock'] }),
	});

	return { mutate: mutation.mutate };
};

export default useDeleteTimeBlock;
