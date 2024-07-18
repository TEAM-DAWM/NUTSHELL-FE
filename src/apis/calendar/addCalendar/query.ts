import { useMutation, useQueryClient } from '@tanstack/react-query';

import addCalendarAccount from '@/apis/calendar/addCalendar/axios';

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
