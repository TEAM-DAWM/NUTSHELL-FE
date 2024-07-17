import { useQuery } from '@tanstack/react-query';

import getTasksPeriod from './axios';
import { TasksPeriodType } from './tasksPeriodType';

const placeholderData = {
	code: 'success',
	data: {
		completeTasks: 0,
		avgInprogressTasks: 0,
		avgDeferredRate: 0,
	},
	message: null,
};
/** Task 리스트 조회 */
const useGetTasksPeriod = ({ formattedStartDate, formattedEndDate, isMonth }: TasksPeriodType) =>
	useQuery({
		queryKey: ['dashboard', formattedStartDate, formattedEndDate, isMonth],
		queryFn: () => getTasksPeriod({ formattedStartDate, formattedEndDate, isMonth }),
		placeholderData,
	});

export default useGetTasksPeriod;
