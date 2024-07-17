import styled from '@emotion/styled';

import AccountArea from '@/components/SettingPage/AccountArea';
import LogOutBtn from '@/components/SettingPage/LogOutBtn';
import ProfileArea from '@/components/SettingPage/ProfileArea';

function Setting() {
	return (
		<SettingContainer>
			<Wrapper>
				<ProfileArea />
				<AccountArea />
			</Wrapper>
			<LogOutBtn />
		</SettingContainer>
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
