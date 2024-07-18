import { privateInstance } from '@/apis/instance';

/** 구글 캘린더 계정 삭제 axios */
const deleteAccount = async (googleCalendarId: number) => {
	const response = await privateInstance.delete(`/api/google/calendars/${googleCalendarId}`);
	return response;
};

export default deleteAccount;
