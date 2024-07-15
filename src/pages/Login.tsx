import styled from '@emotion/styled';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import userLogin from '@/apis/login/loginAxios';

function Login() {
	const navigate = useNavigate();

	const googleSocialLogin = useGoogleLogin({
		onSuccess: async ({ code }) => {
			try {
				const response = userLogin(code);
				if ((await response).code === 'success') {
					localStorage.setItem('accessToken', (await response).data.accessToken);
					localStorage.setItem('refreshToken', (await response).data.refreshToken);
					navigate('/today');
				}
			} catch (error) {
				console.error(error);
			}
		},
		onError: (errorResponse) => {
			console.error(errorResponse);
		},
		flow: 'auth-code',
		scope: 'email profile',
	});

	return <GoogleBtn onClick={googleSocialLogin}>Google Button</GoogleBtn>;
}

const GoogleBtn = styled.button`
	width: 30rem;
`;

export default Login;
