import styled from '@emotion/styled';
import { GoogleOAuthProvider } from '@react-oauth/google';

import useGetUserInfo from '@/apis/user/query';
import AccountArea from '@/components/SettingPage/AccountArea';
import LogOutBtn from '@/components/SettingPage/LogOutBtn';
import ProfileArea from '@/components/SettingPage/ProfileArea';

function Setting() {
	const CALENDAR_CLIENT_ID = import.meta.env.VITE_GOOGLE_CALENDAR_CLIENT_ID;
	const { data: userInfo } = useGetUserInfo();
	console.log(userInfo?.data);

	return (
		<GoogleOAuthProvider clientId={CALENDAR_CLIENT_ID}>
			<SettingContainer>
				<Wrapper>
					<ProfileArea />
					<AccountArea />
				</Wrapper>
				<LogOutBtn />
			</SettingContainer>
		</GoogleOAuthProvider>
	);
}

export default Setting;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const SettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;
