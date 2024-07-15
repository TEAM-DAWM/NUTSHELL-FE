import { isAxiosError } from 'axios';

import instance from '@/apis/instance';
import { LoginResponse } from '@/apis/login/loginInterface';

const AUTH_URL = {
	LOGIN: '/api/auth/login/google',
};

const MESSAGES = {
	UNKNOWN_ERROR: '알수없는 오류가 발생했습니다. 다시 시도해주세요.',
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
