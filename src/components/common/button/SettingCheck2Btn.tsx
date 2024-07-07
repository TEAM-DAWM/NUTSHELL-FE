import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const SettingCheck2 = () => {
	return (
		<SettingCheck2Layout>
			<StyledSettingCheck2Icon />
		</SettingCheck2Layout>
	);
};

export default SettingCheck2;

const SettingCheck2Css = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingCheck2Layout = styled.button`
	${SettingCheck2Css}
	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* 수정 필요 */

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.PRIMARY}; /* svg 색 수정 필요 */
	}
`;

const StyledSettingCheck2Icon = styled(Icons.SettingCheck2)`
	width: 1.391rem;
	height: 0.9563rem;
`;
