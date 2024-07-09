import styled from '@emotion/styled';
import { FunctionComponent, SVGProps } from 'react';

import Icons from '@/assets/svg/index';
import { SettingLayout, smallIcon, bigIcon } from '@/components/common/button/settingBtn/settingBtnStyle';

const settingIconMap: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
	complete: Icons.SettingIcons.SettingCheck1,
	check: Icons.SettingIcons.SettingCheck2,
	done: Icons.SettingIcons.SettingCheck3,
	progress: Icons.SettingIcons.SettingCheck4,
};
interface SettingCheckBtnProps {
	size: 'small' | 'big';
	type: 'complete' | 'check' | 'done' | 'progress';
}

function SettingCheckBtn({ size, type }: SettingCheckBtnProps) {
	const IconComponent = settingIconMap[type];

	const StyledSettingCheck2Icon = styled(IconComponent)<{ size: string }>`
		${({ size }) => (size === 'small' ? smallIcon : bigIcon)};
	`;
	return (
		<SettingLayout size={size}>
			<StyledSettingCheck2Icon size={size} />
		</SettingLayout>
	);
}

export default SettingCheckBtn;
