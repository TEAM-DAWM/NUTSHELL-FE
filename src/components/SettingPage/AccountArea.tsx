import styled from '@emotion/styled';

import { GoogleCalendar } from '@/apis/user/userInfoType';
import AccountDeleteBtn from '@/components/SettingPage/AccountDeleteBtn';
import GoogleCalendarBtn from '@/components/SettingPage/GoogleCalendarBtn';

interface AccountAreaProps {
	calendarAccount: GoogleCalendar[] | undefined;
}

function AccountArea({ calendarAccount }: AccountAreaProps) {
	return (
		<AccountAreaWrapper>
			<AccountText>연동된 계정</AccountText>
			<AccountWrapper>
				<GoogleCalendarBtn />
				{calendarAccount?.map((account) => (
					<InputBox key={account.id}>
						<EmailWrapper>{account.email}</EmailWrapper>
						<AccountDeleteBtn accountId={account.id} />
					</InputBox>
				))}
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
