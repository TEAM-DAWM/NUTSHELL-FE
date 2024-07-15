import instance from '@/apis/instance';

const AUTH_URL = {
	LOGIN: '/api/auth/login/google',
};

const userLogin = async (code: string) => {
	const response = await instance.post(AUTH_URL.LOGIN, code);
	return response;
};

export default userLogin;
