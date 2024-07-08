import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface SettingDeleteBtnProps {
	isHover: boolean;
	isPressed: boolean;
	onClick?: () => void;
}

function SettingDeleteBtn({ isHover, isPressed, onClick }: SettingDeleteBtnProps) {
	return (
		<SettingDeleteBtnLayout isHover={isHover} isPressed={isPressed} onClick={onClick}>
			<StyledDeleteIcon />
		</SettingDeleteBtnLayout>
	);
}

export default SettingDeleteBtn;

const SettingDeleteBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingDeleteBtnLayout = styled.button<{ isHover: boolean; isPressed: boolean }>`
	${SettingDeleteBtnCss}
	background-color: ${({ theme, isPressed }) => (isPressed ? theme.palette.Primary : theme.palette.Blue.Blue1)};

	${({ isHover, theme }) =>
		isHover &&
		css`
			&:hover {
				background-color: ${theme.palette.Blue.Blue3};
			}
		`}
`;

const StyledDeleteIcon = styled(Icons.DeleteIcon)`
	width: 1.4rem;
	height: 1.4rem;
`;
