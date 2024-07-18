import { isAxiosError } from 'axios';

import { privateInstance } from '@/apis/instance';
import MESSAGES from '@/apis/messages';

const AUTH_URL = {
	LOGOUT: '/api/auth/logout',
};

const userLogout = async () => {
	try {
		const response = await privateInstance.delete(AUTH_URL.LOGOUT);
		return response.data;
	} catch (error) {
		if (isAxiosError(error)) throw error;
		else throw new Error(MESSAGES.UNKNOWN_ERROR);
	}
};

export default userLogout;
