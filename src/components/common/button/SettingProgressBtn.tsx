import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

type Props = {};

const SettingProgressBtn = (props: Props) => {
	return (
		<SettingProgressBtnLayout>
			<Icons.SettingProgress />
		</SettingProgressBtnLayout>
	);
};

export default SettingProgressBtn;

const SettingProgressBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingProgressBtnLayout = styled.button`
	${SettingProgressBtnCss}
`;
