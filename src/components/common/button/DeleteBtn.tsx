import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

function DeleteBtn() {
	return (
		<DeleteBtnLayout>
			<StlyedDeleteIcon />
		</DeleteBtnLayout>
	);
}

export default DeleteBtn;

const DeleteBtnLayout = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	background-color: ${({ theme }) => theme.palette.Grey.Grey1};
	border-radius: 10px;

	&:active {
		background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	}
`;

const StlyedDeleteIcon = styled(Icons.DeleteIcon)`
	width: 1.8rem;
	height: 1.8rem;
`;
