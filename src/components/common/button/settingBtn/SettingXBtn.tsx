import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import { SettingLayout } from '@/components/common/button/settingBtn/settingBtnStyle';

function SettingXBtn() {
	return (
		<SettingLayout>
			<StyledSettingX />
		</SettingLayout>
	);
}

export default SettingXBtn;

const StyledSettingX = styled(Icons.SettingX)`
	width: 1.6rem;
	height: 1.6rem;
`;
