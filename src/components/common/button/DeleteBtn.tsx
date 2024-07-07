import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const DeleteBtn = () => {
	return (
		<DeleteBtnLayout>
			<StlyedDeleteIcon />
		</DeleteBtnLayout>
	);
};

export default DeleteBtn;

const DeleteBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	border-radius: 10px;
`;

const DeleteBtnLayout = styled.button`
	${DeleteBtnCss}
	background-color: ${({ theme }) => theme.palette.GREY_01};

	&:active {
		background-color: ${({ theme }) => theme.palette.GREY_03};
	}
`;

const StlyedDeleteIcon = styled(Icons.DeleteIcon)`
	width: 1.8rem;
	height: 1.8rem;
`;
