import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

type Props = {};

const SettingCheck3 = (props: Props) => {
	return (
		<SettingCheck3Layout>
			<Icons.SettingCheck3 />
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
`;
