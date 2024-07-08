import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

function SettingXBtn() {
	return (
		<SettingXBtnLayout>
			<StyledSettingX />
		</SettingXBtnLayout>
	);
}

export default SettingXBtn;

const SettingXBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingXBtnLayout = styled.button`
	${SettingXBtnCss}
	background-color: ${({ theme }) => theme.palette.Blue.Blue1};

	&:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.Primary};

		path {
			stroke: ${({ theme }) => theme.palette.Grey.White};
		}
	}
`;

const StyledSettingX = styled(Icons.SettingX)`
	width: 1.4rem;
`;
