import { privateInstance } from '@/apis/instance';

const addCalendarAccount = async (code: string) => {
	const response = await privateInstance.post('/api/google/calendars', null, {
		params: { code },
	});
	return response.data;
};

export default addCalendarAccount;
