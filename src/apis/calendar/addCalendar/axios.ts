import { privateInstance } from '@/apis/instance';

/** 구글 캘린더 계정 추가 axios */
const addCalendarAccount = async (code: string) => {
	const response = await privateInstance.post('/api/google/calendars', null, {
		params: { code },
	});
	return response.data;
};

export default addCalendarAccount;
