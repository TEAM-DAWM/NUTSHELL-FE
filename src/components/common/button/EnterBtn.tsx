import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const EnterBtn = () => {
	return (
		<EnterBtnLayout>
			<StyledIcon />
		</EnterBtnLayout>
	);
};

export default EnterBtn;

const EnterBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4rem;
	height: 2.2rem;

	border-radius: 8px;
`;

const EnterBtnLayout = styled.button`
	${EnterBtnCss}
	background-color: ${({ theme }) => theme.palette.PRIMARY};

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_PASSED}; /* 수정 필요 */
		path {
			stroke: ${({ theme }) => theme.palette.BLUE_DEFAULT}; /* 수정 필요 */
		}
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* svg 색 수정 필요 */
		path {
			stroke: ${({ theme }) => theme.palette.BLACK}; /* 수정 필요 */
		}
	}
`;

const StyledIcon = styled(Icons.Arrow_up)`
	width: 1.6rem;
	height: 1.6rem;
`;
