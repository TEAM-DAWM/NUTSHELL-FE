import styled from '@emotion/styled';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import userLogin from '@/apis/login/loginAxios';
import Images from '@/assets/images';

function Login() {
	const navigate = useNavigate();

	const googleSocialLogin = useGoogleLogin({
		onSuccess: async ({ code }) => {
			try {
				const response = await userLogin(code);
				if (response.code === 'success') {
					localStorage.setItem('accessToken', response.data.accessToken);
					localStorage.setItem('refreshToken', response.data.refreshToken);
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

	return (
		<LoginLayout>
			<LeftSection>
				<LogoTitleImg src={Images.titleIcon} />
				<LoginBtn>
					<GoogleBtn onClick={googleSocialLogin}>
						<GoogleImg src={Images.googleIcon} />
						구글 계정으로 시작하기
					</GoogleBtn>
					<SignDescription>
						가입하면 자동으로 <a href="https://www.naver.com/">개인정보보호정책</a>과{' '}
						<a href="https://www.naver.com/">이용약관</a>에 동의한 것으로 간주됩니다.
					</SignDescription>
				</LoginBtn>
			</LeftSection>
			<LoginImg src={Images.BG.loginBg} />
		</LoginLayout>
	);
}

const LoginLayout = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
`;

const LeftSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 8.2rem;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;
`;

const LoginImg = styled.img`
	width: 50%;
	height: 100%;
`;

const LogoTitleImg = styled.img`
	width: 34rem;
	height: 8rem;
`;

const LoginBtn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	align-items: center;
	width: 32.4rem;
	height: 9.5rem;
`;

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

const SignDescription = styled.p`
	width: 24rem;

	color: ${({ theme }) => theme.palette.Grey.Grey5};
	text-align: center;

	${({ theme }) => theme.fontTheme.CAPTION_02};
	a {
		color: ${({ theme }) => theme.palette.Grey.Grey5};
	}
`;
export default Login;
