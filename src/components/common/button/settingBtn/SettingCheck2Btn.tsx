import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import { SettingLayout } from '@/components/common/button/settingBtn/settingBtnStyle';

function SettingCheck2() {
	return (
		<SettingLayout>
			<StyledSettingCheck2Icon />
		</SettingLayout>
	);
}

export default SettingCheck2;

const StyledSettingCheck2Icon = styled(Icons.SettingIcons.SettingCheck2)`
	width: 1.6rem;
	height: 1.6rem;
`;
