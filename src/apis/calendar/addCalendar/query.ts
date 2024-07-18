import { useMutation, useQueryClient } from '@tanstack/react-query';

import addCalendarAccount from '@/apis/calendar/addCalendar/axios';

/** 구글 캘린더 계정 추가 react-query */
const useAccountAdd = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (code: string) => addCalendarAccount(code),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['user'],
			});
		},
	});

	return mutation;
};

export default useAccountAdd;
