import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import { SettingLayout } from '@/components/common/button/settingBtn/settingBtnStyle';

function SettingCheck3() {
	return (
		<SettingLayout>
			<StyledSettingCheck3Icon />
		</SettingLayout>
	);
}

export default SettingCheck3;

const StyledSettingCheck3Icon = styled(Icons.SettingIcons.SettingCheck3)`
	width: 1.6rem;
	height: 1.6rem;
`;
