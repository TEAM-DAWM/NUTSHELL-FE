import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import { SettingLayout, smallIcon, bigIcon } from '@/components/common/button/settingBtn/settingBtnStyle';

interface SettingXBtnProps {
	size: 'small' | 'big';
}

function SettingXBtn({ size }: SettingXBtnProps) {
	return (
		<SettingLayout size={size}>
			<StyledSettingX size={size} />
		</SettingLayout>
	);
}

export default SettingXBtn;

const StyledSettingX = styled(Icons.SettingX)<{ size: string }>`
	${({ size }) => (size === 'small' ? smallIcon : bigIcon)};
`;
