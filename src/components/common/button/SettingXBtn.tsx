import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

type Props = {};

const SettingXBtn = (props: Props) => {
	return (
		<SettingXBtnLayout>
			<Icons.SettingX />
		</SettingXBtnLayout>
	);
};

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
`;
