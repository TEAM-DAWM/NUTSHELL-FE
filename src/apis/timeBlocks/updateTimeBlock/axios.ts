import { PatchTimeBlokType } from './PatchTimeBlockType';

import { privateInstance } from '@/apis/instance';

const PatchTimeBlock = async ({ taskId, timeBlockId, startTime, endTime }: PatchTimeBlokType) => {
	await privateInstance.patch(`/api/tasks/${taskId}/time-blocks/${timeBlockId}`, {
		startTime,
		endTime,
	});
};

export default PatchTimeBlock;
