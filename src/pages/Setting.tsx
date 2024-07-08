import styled from '@emotion/styled';

import NavBar from '@/components/common/NavBar';
import LogOutBtn from '@/components/SettingPage/LogOutBtn';
import ProfileArea from '@/components/SettingPage/ProfileArea';

function Setting() {
	return (
		<div>
			<NavBar />
			<SettingContainer>
				<ProfileArea />
				<LogOutBtn />
			</SettingContainer>
		</div>
	);
}

export default Setting;

const SettingContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
