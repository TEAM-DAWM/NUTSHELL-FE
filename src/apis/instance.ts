import axios, { isAxiosError } from 'axios';

import { LoginResponse } from '@/apis/login/loginInterface';
import MESSAGES from '@/apis/messages';

const API_URL = `${import.meta.env.VITE_BASE_URL}`;

// 토큰이 필요없는 api요청을 보내는 axios인스턴스
const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 토큰이 필요한 api요청을 보내는 axios인스턴스
export const privateInstance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
	},
});

// refresh token api
export async function postRefreshToken() {
	try {
		const response = await axios.post<LoginResponse>(
			`${API_URL}/api/auth/re-issue`,
			{},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
				},
			}
		);
		return response;
	} catch (error) {
		if (isAxiosError(error)) throw error;
		else throw new Error(MESSAGES.UNKNOWN_ERROR);
	}
}

privateInstance.interceptors.response.use(
	(response) => response,

	async (error) => {
		const {
			config,
			response: { status },
		} = error;

		// 토큰이 만료되을 때
		if (status === 401) {
			const originRequest = config;
			try {
				const response = await postRefreshToken();
				// 리프레시 토큰 요청이 성공할 때
				if (response.status === 200) {
					const newAccessToken = response.data.data.accessToken;
					localStorage.setItem('accessToken', newAccessToken);
					localStorage.setItem('refreshToken', response.data.data.refreshToken);
					axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
					// 진행중이던 요청 이어서하기
					originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
					return await axios(originRequest);
				}
			} catch (err) {
				// 리프레시 토큰 요청이 실패할 때
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
				alert(MESSAGES.LOGIN.EXPIRED);
				window.location.replace('/');
			}
		}
		return Promise.reject(error);
	}
);

export default instance;
