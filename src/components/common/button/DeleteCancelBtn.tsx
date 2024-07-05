import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
	status: 'delete' | 'cancel';
};

const DeleteCancelBtn = ({ status }: Props) => {
	return <>{status === 'delete' ? <DeleteBtn>삭제</DeleteBtn> : <CancelBtn>취소</CancelBtn>}</>;
};

export default DeleteCancelBtn;

const DeleteCancelBtnCss = css`
	display: flex;
	align-items: center;
	align-self: stretch;
	width: 13rem;
	height: 3.2rem;
	padding: 0.7rem 1.2rem;

	box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
	border-radius: 8px;
`;

const DeleteBtn = styled.button`
	${DeleteCancelBtnCss}
	${({ theme }) => theme.palette.WITHE}
`;

const CancelBtn = styled.button`
	${DeleteCancelBtnCss}
`;
