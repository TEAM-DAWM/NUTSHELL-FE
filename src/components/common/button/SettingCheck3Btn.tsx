import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const SettingCheck3 = () => {
	return (
		<SettingCheck3Layout>
			<StyledSettingCheck3Icon /> {/*아이콘 크기 조정 필요*/}
		</SettingCheck3Layout>
	);
};

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
	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* 수정 필요 */

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.PRIMARY}; /* svg 색 수정 필요 */
		path {
			stroke: ${({ theme }) => theme.palette.WITHE};
		}
	}
`;

const StyledSettingCheck3Icon = styled(Icons.SettingCheck3)`
	width: 1.391rem;
	height: 1.391rem;
`;
