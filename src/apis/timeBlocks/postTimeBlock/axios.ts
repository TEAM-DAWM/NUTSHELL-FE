import { PostTimeBlokType } from './PostTimeBlockType';

import { privateInstance } from '@/apis/instance';

const CreateTimeBlock = async ({ taskId, startTime, endTime }: PostTimeBlokType) => {
	try {
		await privateInstance.post(`/api/tasks/${taskId}/time-blocks`, {
			startTime,
			endTime,
		});
	} catch (error) {
		console.error('Error creating time block:', error);
	} finally {
		console.log('taskId, startDate, endDate', taskId, startTime, endTime);
	}
};

export default CreateTimeBlock;
