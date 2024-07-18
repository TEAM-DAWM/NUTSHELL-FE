import { privateInstance } from '@/apis/instance';

/** task 삭제 axios */
const deleteTask = async (taskId: number) => {
	const { data } = await privateInstance.delete(`/api/tasks/${taskId}`);
	return data;
};

export default deleteTask;
