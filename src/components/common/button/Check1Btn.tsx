import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface Check1Props {
	type: 'setting' | 'done';
	isHover: boolean;
	isPressed: boolean;
	onClick: () => void;
}

function Check1Btn({ type, isHover, isPressed, onClick }: Check1Props) {
	return (
		<div>
			{type === 'setting' ? (
				<SettingCheck1Layout isHover={isHover} isPressed={isPressed} onClick={onClick}>
					<StlyedSettingCheck1Ic />
				</SettingCheck1Layout>
			) : (
				<DoneLayout>
					<StlyedDoneIc />
				</DoneLayout>
			)}
		</div>
	);
}

export default Check1Btn;

const alignCenterStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SettingCheck1Layout = styled.button<{ isHover: boolean; isPressed: boolean }>`
	${alignCenterStyle}
	width: 2.4rem;
	height: 2.4rem;

	background-color: ${({ theme, isPressed }) => (isPressed ? theme.palette.Primary : theme.palette.Blue.Blue1)};

	path {
		stroke: ${({ theme, isPressed }) => (isPressed ? theme.palette.Grey.White : theme.palette.Primary)};
	}
	border-radius: 8px;

	${({ isHover, theme }) =>
		isHover &&
		css`
			&:hover {
				background-color: ${theme.palette.Blue.Blue3};
			}
		`}
`;

const StlyedSettingCheck1Ic = styled(Icons.SettingIcons.SettingCheck1)`
	width: 1.6rem;
	height: 1.6rem;
`;

const DoneLayout = styled.button`
	${alignCenterStyle}
	width: 3.2rem;
	height: 3.2rem;

	background-color: ${({ theme }) => theme.palette.Blue.Blue1};
	border-radius: 10px;
`;

const StlyedDoneIc = styled(Icons.DoneIcon)`
	width: 1.85rem;
`;
