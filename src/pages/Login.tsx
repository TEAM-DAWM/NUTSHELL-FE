import styled from '@emotion/styled';

import Images from '@/assets/images';
import GoogleLoginBtn from '@/components/loginPage/GoogleLoginBtn';

function Login() {
	return (
		<LoginLayout>
			<LeftSection>
				<LogoTitleImg src={Images.titleIcon} />
				<LoginBtn>
					<GoogleLoginBtn />
					<SignDescription>
						가입하면 자동으로 <a href="https://github.com/TEAM-DAWM/NUTSHELL-FE/pull/146">개인정보보호정책</a>과{' '}
						<a href="https://github.com/TEAM-DAWM/NUTSHELL-FE">이용약관</a>에 동의한 것으로 간주됩니다.
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
