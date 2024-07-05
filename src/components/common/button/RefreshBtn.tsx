import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const RefreshBtn = () => {
	return (
		<RefreshBtnLayout>
			<Icons.Refresh />
			<Text>동기화</Text>
		</RefreshBtnLayout>
	);
};

export default RefreshBtn;

const RefreshBtnCss = css`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
	width: 7.5rem;
	height: 2.6rem;

	border-radius: 8px;
`;

const RefreshBtnLayout = styled.button`
	${RefreshBtnCss}
`;

const Text = styled.p`
	text-align: center;
`;
