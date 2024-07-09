import styled from '@emotion/styled';
import { FunctionComponent, SVGProps } from 'react';

import Icons from '@/assets/svg/index';
import { SettingLayout, smallIcon, bigIcon } from '@/components/common/button/settingBtn/settingBtnStyle';

const settingIconMap: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
	complete: Icons.SettingIcons.SettingCheck1,
	check: Icons.SettingIcons.SettingCheck2,
	done: Icons.SettingIcons.SettingCheck3,
	progress: Icons.SettingIcons.SettingCheck4,
	xBtn: Icons.SettingX,
};
interface SettingCheckBtnProps {
	size: 'small' | 'big';
	type: 'complete' | 'check' | 'done' | 'progress' | 'xBtn';
	onClick?: () => void;
	isHover: boolean;
	isPressed: boolean;
}

function SettingCheckBtn({ size, type, onClick, isHover, isPressed }: SettingCheckBtnProps) {
	const IconComponent = settingIconMap[type];

	const isFill = type === 'progress';

	const StyledSettingCheck2Icon = styled(IconComponent)<{ size: string }>`
		${({ size }) => (size === 'small' ? smallIcon : bigIcon)};
	`;

	return (
		<SettingLayout size={size} isFill={isFill} onClick={onClick} isHover={isHover} isPressed={isPressed}>
			<StyledSettingCheck2Icon size={size} />
		</SettingLayout>
	);
}

export default SettingCheckBtn;
