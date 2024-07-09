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
					<NameText>{USERS.data.name}</NameText>
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
	width: 41.5rem;
	margin: 0 1rem 0 0.7rem;
	border-radius: 12px;
	border: 1px solid #e9e9ee;
	display: flex;
	padding: 1.6rem 0 1.6rem 1.6rem;
	align-items: center;
	gap: 1.6rem;
	align-self: stretch;
	box-sizing: border-box;
`;

const ProfileImg = styled.img`
	width: 6.6rem;
	height: 6.6rem;
`;
const ProfileTextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.4rem;
`;

const NameText = styled.p`
	${({ theme }) => theme.fontTheme.TITLE_03}
	color: ${({ theme }) => theme.palette.Grey.Black}
`;

const EmailText = styled.p`
	${({ theme }) => theme.fontTheme.BODY_02}
	color: ${({ theme }) => theme.palette.Grey.Grey7}
`;

const ProfileText = styled.div`
	display: flex;
	padding: 3.6rem 3.6rem 1.6rem 2rem;
	justify-content: center;
	align-items: center;
	${({ theme }) => theme.fontTheme.HEADLINE_02}
	color: ${({ theme }) => theme.palette.Grey.Black}
`;
