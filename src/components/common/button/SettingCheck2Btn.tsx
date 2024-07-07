import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

type Props = {};

const SettingCheck2 = (props: Props) => {
	return (
		<SettingCheck2Layout>
			<Icons.SettingCheck2 />
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
`;
