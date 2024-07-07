import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const RefreshBtn = () => {
	return (
		<RefreshBtnLayout>
			<StyledRefreshIcon />
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
	background-color: ${({ theme }) => theme.palette.BLACK};

	&:hover {
		background-color: ${({ theme }) => theme.palette.GREY_06};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.GREY_05}; /* 수정 필요 */
	}
`;

const StyledRefreshIcon = styled(Icons.Refresh)`
	width: 1.2rem;
	height: 1.2rem;
`;

const Text = styled.p`
	color: ${({ theme }) => theme.palette.WITHE};
	text-align: center;

	${({ theme }) => theme.fontTheme.CAPTION_01}; /* 수정 필요 */
`;
