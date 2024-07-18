import { useMutation, useQueryClient } from '@tanstack/react-query';

import deleteAccount from '@/apis/calendar/deleteCalendar/axios';

const useEventsDelete = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (googleCalendarId: number) => deleteAccount(googleCalendarId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['user'],
			});
		},
	});

	return mutation;
};

export default useEventsDelete;
