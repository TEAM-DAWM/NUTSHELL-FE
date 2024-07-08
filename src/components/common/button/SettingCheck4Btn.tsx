import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

function SettingCheck3() {
	return (
		<SettingCheck3Layout>
			<StyledSettingCheck4Icon />
		</SettingCheck3Layout>
	);
}

export default SettingCheck3;

const SettingCheck3Css = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingCheck3Layout = styled.button`
	${SettingCheck3Css}
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

const StyledSettingCheck4Icon = styled(Icons.SettingIcons.SettingCheck4)`
	width: 1.3911rem;
	height: 1.3911rem;
`;
