import { isAxiosError } from 'axios';

import { privateInstance } from '@/apis/instance';
import MESSAGES from '@/apis/messages';

const userGoogleCalendar = async (code: string) => {
	try {
		const response = await privateInstance.post('/api/google/calendars', null, {
			params: { code },
		});
		return response.data;
	} catch (error) {
		if (isAxiosError(error)) throw error;
		else throw new Error(MESSAGES.UNKNOWN_ERROR);
	}
};

export default userGoogleCalendar;
