import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface EnterBtnProps {
	isDisabled: boolean;
}

const EnterBtn = ({ isDisabled }: EnterBtnProps) => {
	return (
		<EnterBtnLayout isDisabled={isDisabled} disabled={isDisabled}>
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

const EnterBtnLayout = styled.button<{ isDisabled: boolean }>`
	${EnterBtnCss}
	color: ${({ theme }) => theme.palette.WITHE};

	background-color: ${({ theme, isDisabled }) =>
		isDisabled ? theme.palette.BLUE_DISABLED : theme.palette.PRIMARY}; /* 색 수정 필요 */
	${({ theme, isDisabled }) =>
		!isDisabled &&
		`
		&:hover {
			background-color: ${theme.palette.BLUE_PASSED};  /* 수정 필요 */
			path {
			stroke: ${theme.palette.BLUE_DEFAULT}; /* 수정 필요 */
		}
		}
		&:active {
			background-color: ${theme.palette.BLUE_DISABLED};
			path {
			stroke: ${theme.palette.BLACK}; /* 수정 필요 */
		}
		}
	`}
`;

const StyledIcon = styled(Icons.Arrow_up)`
	width: 1.6rem;
	height: 1.6rem;
`;
