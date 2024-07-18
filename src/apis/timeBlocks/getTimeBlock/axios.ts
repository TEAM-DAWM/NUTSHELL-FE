import { GetTimeBlokType } from './GetTimeBlockType';

import { privateInstance } from '@/apis/instance';

const getTimeBlock = async ({ startDate, range, categories }: GetTimeBlokType) => {
	const response = await privateInstance.get(`/api/tasks/time-blocks`, {
		params: {
			startDate,
			range,
			categories,
		},
	});
	console.log('startDate, range', startDate, range);
	return response;
};

export default getTimeBlock;
