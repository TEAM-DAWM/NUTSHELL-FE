import { PostTimeBlokType } from './PostTimeBlockType';

import { privateInstance } from '@/apis/instance';

const CreateTimeBlock = async ({ taskId, startDate, endDate }: PostTimeBlokType) => {
	await privateInstance.post(`/api/tasks/${taskId}/time-blocks`, {
		startDate,
		endDate,
	});
};

export default CreateTimeBlock;
