import styled from '@emotion/styled';
import { useGoogleLogin } from '@react-oauth/google';

import userLogin from '@/apis/login/loginAxios';

function Login() {
	const googleSocialLogin = useGoogleLogin({
		scope: 'email profile',
		onSuccess: async ({ code }) => {
			try {
				const response = await userLogin(code);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		},
		onError: (errorResponse) => {
			console.error(errorResponse);
		},
		flow: 'auth-code',
	});

	return <GoogleBtn onClick={googleSocialLogin}>Google Button</GoogleBtn>;
}

const GoogleBtn = styled.button`
	width: 30rem;
`;

export default Login;
