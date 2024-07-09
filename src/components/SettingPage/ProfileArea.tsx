import styled from '@emotion/styled';

import sampleImg from '@/assets/images/sample.png';
import USERS from '@/constants/users';

function ProfileArea() {
	return (
		<ProfileAreaLayout>
			<ProfileText>프로필</ProfileText>
			<ProfileWrapper>
				<ProfileImg src={sampleImg} alt="프로필" />
				<ProfileTextBox>
					<LastName>
						{USERS.data.familyName} {USERS.data.givenName}
					</LastName>
					<EmailText>{USERS.data.email}</EmailText>
				</ProfileTextBox>
			</ProfileWrapper>
		</ProfileAreaLayout>
	);
}

export default ProfileArea;

const ProfileAreaLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 43.2rem;
	height: 17.8rem;
`;

const ProfileWrapper = styled.div`
	display: flex;
	gap: 1.6rem;
	align-items: center;
	align-self: stretch;
	box-sizing: border-box;
	width: 41.5rem;
	margin: 0 1rem 0 0.7rem;
	padding: 1.6rem 0 1.6rem 1.6rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;

const ProfileImg = styled.img`
	width: 6.6rem;
	height: 6.6rem;
`;
const ProfileTextBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	align-items: flex-start;
`;

const LastName = styled.p`
	${({ theme }) => theme.fontTheme.TITLE_03}
	color: ${({ theme }) => theme.palette.Grey.Black}
`;

const EmailText = styled.p`
	${({ theme }) => theme.fontTheme.BODY_02}
	color: ${({ theme }) => theme.palette.Grey.Grey7}
`;

const ProfileText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3.6rem 3.6rem 1.6rem 2rem;

	${({ theme }) => theme.fontTheme.HEADLINE_02}
	color: ${({ theme }) => theme.palette.Grey.Black}
`;
