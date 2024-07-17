import styled from '@emotion/styled';
import { useGoogleLogin } from '@react-oauth/google';

import userLogin from '@/apis/login/loginAxios';
import Images from '@/assets/images';

function GoogleLoginBtn() {
	const googleSocialLogin = useGoogleLogin({
		onSuccess: async ({ code }) => {
			try {
				const response = await userLogin(code);
				if (response.code === 'success') {
					localStorage.setItem('accessToken', response.data.access_token);
					localStorage.setItem('refreshToken', response.data.refresh_token);
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
	return (
		<GoogleBtn onClick={googleSocialLogin}>
			<GoogleImg src={Images.googleIcon} />
			구글 계정으로 시작하기
		</GoogleBtn>
	);
}
const GoogleBtn = styled.button`
	display: flex;
	gap: 0.9rem;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 4.3rem;

	color: ${({ theme }) => theme.palette.Grey.White};

	background-color: ${({ theme }) => theme.palette.Grey.Black};
	border-radius: 12px;
	${({ theme }) => theme.fontTheme.LABEL_03};
`;
const GoogleImg = styled.img`
	width: 1.8rem;
	height: 1.8rem;
`;
export default GoogleLoginBtn;
