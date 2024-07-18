import { privateInstance } from '@/apis/instance';

const deleteAccount = async (googleCalendarId: number) => {
	const response = await privateInstance.delete(`/api/google/calendars/${googleCalendarId}`);
	return response;
};

export default deleteAccount;
