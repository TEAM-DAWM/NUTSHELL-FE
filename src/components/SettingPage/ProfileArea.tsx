import styled from '@emotion/styled';

import google_calendar from '@/assets/images/google_calendar.png';
import sampleImg from '@/assets/images/sample.png';
import Icons from '@/assets/svg/index';
import SettingXBtn from '@/components/common/button/settingBtn/SettingXBtn';
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
			<AccountText>연동된 계정</AccountText>
			<AccountWrapper>
				<CalendarContainer>
					<CalendarBox>
						<GoogleImg src={google_calendar} alt="구글 캘린더" />
						<CalendarText>구글 캘린더</CalendarText>
					</CalendarBox>
					<IconBox />
				</CalendarContainer>
				<InputBox>
					<EmailWrapper>{USERS.data.email}</EmailWrapper>
					<SettingXBtn />
				</InputBox>
			</AccountWrapper>
		</ProfileAreaLayout>
	);
}

export default ProfileArea;

const ProfileAreaLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 43.2rem;
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

const AccountText = styled.div`
	display: flex;
	padding: 3.6rem 3.6rem 0.8rem 2rem;
	justify-content: center;
	align-items: center;
	${({ theme }) => theme.fontTheme.HEADLINE_02}
	color: ${({ theme }) => theme.palette.Grey.Black}
`;

const AccountWrapper = styled.div`
	display: flex;
	width: 412px;
	padding: 1.2rem 1.6rem 1.6rem 1.6rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.2rem;
	margin: 0.8rem 1rem 0.8rem 0.7rem;
	border-radius: 12px;
	border: 1px solid #e9e9ee;
	box-sizing: border-box;
`;

const CalendarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-self: stretch;
	width: 38rem;
	height: 4rem;
`;

const CalendarBox = styled.div`
	height: 4rem;
	display: flex;
	justify-content: flex-start;
	gap: 0.4rem;
	box-sizing: border-box;
`;

const GoogleImg = styled.img`
	margin: 0.2rem 0;
	width: 3.6rem;
	height: 3.6rem;
`;

const CalendarText = styled.p`
	${({ theme }) => theme.fontTheme.BODY_02};
	width: 7.4rem;
	align-self: center;
	margin: 0.6rem 0;
`;

const IconBox = styled(Icons.plus_circle)`
	width: 2.4rem;
	height: 2.4rem;
	margin: 0.8rem;
	box-sizing: border-box;
`;

const InputBox = styled.p`
	display: flex;
	width: 38.2rem;
	padding: 0.6rem 0.8rem 0.6rem 1.2rem;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;
	background: #dfe9fc;
	box-sizing: border-box;
`;

const EmailWrapper = styled.p`
	${({ theme }) => theme.fontTheme.BODY_02};
	color: #5a5a61;
`;
