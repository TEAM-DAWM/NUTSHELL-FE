import styled from '@emotion/styled';

import google_calendar from '@/assets/images/google_calendar.png';
import Icons from '@/assets/svg/index';
import AccountDeleteBtn from '@/components/SettingPage/AccountDeleteBtn';
import USERS from '@/constants/users';

function AccountArea() {
	return (
		<AccountAreaWrapper>
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
					<AccountDeleteBtn />
				</InputBox>
			</AccountWrapper>
		</AccountAreaWrapper>
	);
}

export default AccountArea;

const AccountAreaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 42.2rem;
	height: 20.4rem;
`;

const AccountText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3.6rem 3.6rem 0.8rem 2rem;

	${({ theme }) => theme.fontTheme.HEADLINE_02}
	color: ${({ theme }) => theme.palette.Grey.Black}
`;

const AccountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 41.5rem;
	margin: 0.8rem 0.3rem 0.8rem 0.7rem;
	padding: 1.2rem 1.6rem 1.6rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;

const CalendarContainer = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	justify-content: space-between;
	width: 38rem;
	height: 4rem;
`;

const CalendarBox = styled.div`
	display: flex;
	gap: 0.4rem;
	justify-content: flex-start;
	box-sizing: border-box;
	height: 4rem;
`;

const GoogleImg = styled.img`
	width: 3.6rem;
	height: 3.6rem;
	margin: 0.2rem 0;
`;

const CalendarText = styled.p`
	align-self: center;
	width: 7.4rem;
	margin: 0.6rem 0;
	${({ theme }) => theme.fontTheme.BODY_02};
`;

const IconBox = styled(Icons.plus_circle)`
	box-sizing: border-box;
	width: 2.4rem;
	height: 2.4rem;
	margin: 0.8rem;
`;

const InputBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	width: 38.2rem;
	padding: 0.6rem 0.8rem 0.6rem 1.2rem;

	background: ${({ theme }) => theme.palette.Blue.Blue2};
	border-radius: 8px;
`;

const EmailWrapper = styled.p`
	${({ theme }) => theme.fontTheme.BODY_02};
	color: ${({ theme }) => theme.palette.Grey.Grey7};
`;
