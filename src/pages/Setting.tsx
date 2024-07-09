import styled from '@emotion/styled';

import NavBar from '@/components/common/NavBar';
import AccountArea from '@/components/SettingPage/AccountArea';
import LogOutBtn from '@/components/SettingPage/LogOutBtn';
import ProfileArea from '@/components/SettingPage/ProfileArea';

function Setting() {
	return (
		<div>
			<NavBar />
			<SettingContainer>
				<Wrapper>
					<ProfileArea />
					<AccountArea />
				</Wrapper>
				<LogOutBtn />
			</SettingContainer>
		</div>
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
	height: 100vh;
`;
