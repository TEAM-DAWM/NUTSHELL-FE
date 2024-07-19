import { useMutation, useQueryClient } from '@tanstack/react-query';

import syncGoogleTimeBlock from '@/apis/timeBlocks/googleTimeBlock/axios';

/** 구글 캘린더 일정 동기화 react-query */
const useSyncGoogleTimeBlock = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: () => syncGoogleTimeBlock(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['timeblock'],
			});
		},
	});

	return { mutate, isPending };
};

export default useSyncGoogleTimeBlock;
