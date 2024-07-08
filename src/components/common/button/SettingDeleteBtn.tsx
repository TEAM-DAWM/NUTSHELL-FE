import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface SettingDeleteBtnProps {
	isHover: boolean;
	isPressed: boolean;
}

function SettingDeleteBtn({ isHover, isPressed }: SettingDeleteBtnProps) {
	return (
		<SettingDeleteBtnLayout isHover={isHover} isPressed={isPressed}>
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
			}
		`}
`;

const StyledDeleteIcon = styled(Icons.DeleteIcon)`
	width: 1.35rem;
	height: 1.35rem;
`;
