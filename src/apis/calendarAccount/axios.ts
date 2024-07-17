import { isAxiosError } from 'axios';

import instance from '@/apis/instance';
import MESSAGES from '@/apis/messages';

const userGoogleCalendar = async (code: string) => {
	try {
		const response = await instance.post('/api/google/calendars', null, {
			params: { code },
		});
		return response.data;
	} catch (error) {
		if (isAxiosError(error)) throw error;
		else throw new Error(MESSAGES.UNKNOWN_ERROR);
	}
};

export default userGoogleCalendar;
