import { TasksPeriodType } from './taskPeriodType';

import { privateInstance } from '@/apis/instance';

const getTasksPeriod = async ({ formattedStartDate, formattedEndDate, isMonth }: TasksPeriodType) => {
	const { data } = await privateInstance.get('/api/tasks/period', {
		params: {
			startDate: formattedStartDate,
			endDate: formattedEndDate,
			isMonth: isMonth || null,
		},
	});
	return data;
};

export default getTasksPeriod;
