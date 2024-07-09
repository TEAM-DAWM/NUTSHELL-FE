import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import { SettingLayout, smallIcon, bigIcon } from '@/components/common/button/settingBtn/settingBtnStyle';

interface SettingCheck3Props {
	size: 'small' | 'big';
}

function SettingCheck3({ size }: SettingCheck3Props) {
	return (
		<SettingLayout size={size}>
			<StyledSettingCheck3Icon size={size} />
		</SettingLayout>
	);
}

export default SettingCheck3;

const StyledSettingCheck3Icon = styled(Icons.SettingIcons.SettingCheck3)<{ size: string }>`
	${({ size }) => (size === 'small' ? smallIcon : bigIcon)};
`;
