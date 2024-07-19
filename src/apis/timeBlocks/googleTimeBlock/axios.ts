import { privateInstance } from '@/apis/instance';

/** 구글 캘린더 일정 동기화 요청 axios */
const syncGoogleTimeBlock = async () => {
	const response = await privateInstance.post(`/api/google/calendars/sync`);
	return response;
};

export default syncGoogleTimeBlock;
