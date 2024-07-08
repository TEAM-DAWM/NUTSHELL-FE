import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface SettingCheck4Props {
	isHover: boolean;
	isPressed: boolean;
}

function SettingCheck4({ isHover, isPressed }: SettingCheck4Props) {
	return (
		<SettingCheck4Layout isHover={isHover} isPressed={isPressed}>
			<StyledSettingCheck4Icon />
		</SettingCheck4Layout>
	);
}

export default SettingCheck4;

const SettingCheck4Css = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingCheck4Layout = styled.button<{ isHover: boolean; isPressed: boolean }>`
	${SettingCheck4Css}
	background-color: ${({ theme }) => theme.palette.Blue.Blue1};

	${({ isHover, theme }) =>
		isHover &&
		css`
			&:hover {
				background-color: ${theme.palette.Blue.Blue3};
			}
		`}
	${({ isPressed, theme }) =>
		isPressed &&
		css`
			&:active {
				background-color: ${theme.palette.Primary};

				path {
					stroke: ${theme.palette.Grey.White};
				}
			}
		`}
`;

const StyledSettingCheck4Icon = styled(Icons.SettingIcons.SettingCheck4)`
	width: 1.3911rem;
	height: 1.3911rem;
`;
