import styled from '@emotion/styled';
import { FunctionComponent, SVGProps } from 'react';

import { bigSize, smallSize } from './arrangeBtnStyle';

import Icons from '@/assets/svg/index';
import { ArrangeBtnType } from '@/types/arrangeBtnType';

const iconMap: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
	right: Icons.ArrangeBtn.IcnArrangeRight,
	left: Icons.ArrangeBtn.IcnArrangeLeft,
	set: Icons.ArrangeBtn.IcnArrangeSet,
	calendar: Icons.ArrangeBtn.IcnArrangeCalendar,
};
function ArrangeBtn({ type, mode, color, size }: ArrangeBtnType) {
	const IconComponent = iconMap[type];

	const StyledIcon = styled(IconComponent)<{ size: string; color: string; mode: string }>`
		${({ size }) => (size === 'small' ? smallSize : bigSize)};
	`;

	return <StyledIcon size={size} color={color} mode={mode} />;
}

export default ArrangeBtn;
