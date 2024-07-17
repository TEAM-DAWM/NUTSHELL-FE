import { isAxiosError } from 'axios';

import instance from '@/apis/instance';
import { LoginResponse } from '@/apis/login/loginInterface';
import MESSAGES from '@/apis/messages';

const AUTH_URL = {
	LOGIN: '/api/auth/login/google',
};

const userLogin = async (code: string): Promise<LoginResponse> => {
	try {
		const response = await instance.post<LoginResponse>(AUTH_URL.LOGIN, null, {
			params: { code },
		});
		return response.data;
	} catch (error) {
		if (isAxiosError(error)) throw error;
		else throw new Error(MESSAGES.UNKNOWN_ERROR);
	}
};

export default userLogin;
