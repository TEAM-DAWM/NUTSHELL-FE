import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface SettingCheck4Props {
	isHover: boolean;
	isPressed: boolean;
	onClick: () => void;
}

function SettingCheck4({ isHover, isPressed, onClick }: SettingCheck4Props) {
	return (
		<SettingCheck4Layout isHover={isHover} isPressed={isPressed} onClick={onClick}>
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
	background-color: ${({ theme, isPressed }) => (isPressed ? theme.palette.Primary : theme.palette.Blue.Blue1)};

	path {
		fill: ${({ theme, isPressed }) => (isPressed ? theme.palette.Grey.White : theme.palette.Primary)};
	}

	${({ isHover, theme }) =>
		isHover &&
		css`
			&:hover {
				background-color: ${theme.palette.Blue.Blue3};
			}
		`}
`;

const StyledSettingCheck4Icon = styled(Icons.SettingIcons.SettingCheck4)`
	width: 1.53rem;
	height: 1.53rem;
`;
