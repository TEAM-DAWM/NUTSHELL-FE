import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

type Props = {};

const SettingCheck1 = (props: Props) => {
	return (
		<SettingCheck1Layout>
			<Icons.SettingCheck1 />
		</SettingCheck1Layout>
	);
};

export default SettingCheck1;

const SettingCheck1Css = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingCheck1Layout = styled.button`
	${SettingCheck1Css}
`;
