import { DeleteTimeBlockType } from './DeleteTimeBlockType';

import { privateInstance } from '@/apis/instance';

/** TimeBlock 삭제 */
const deleteTimeBlock = async ({ taskId, timeBlockId }: DeleteTimeBlockType) => {
	await privateInstance.delete(`/api/tasks/${taskId}/time-blocks/${timeBlockId}`);
};

export default deleteTimeBlock;
