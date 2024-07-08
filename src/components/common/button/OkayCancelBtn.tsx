import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface OkayCancelBtnProps {
	type: 'okay' | 'cancel';
}

function OkayCancelBtn({ type }: OkayCancelBtnProps) {
	return <div>{type === 'okay' ? <OkayBtn>확인</OkayBtn> : <CancelBtn>취소</CancelBtn>}</div>;
}

export default OkayCancelBtn;

const OkayCancelBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6rem;
	height: 3.2rem;

	border-radius: 8px;
`;

const OkayBtn = styled.button`
	${OkayCancelBtnCss};
	color: ${({ theme }) => theme.palette.WITHE};

	background-color: ${({ theme }) => theme.palette.BLACK};
	${({ theme }) => theme.fontTheme.BODY_02};
	box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
`;

const CancelBtn = styled.button`
	${OkayCancelBtnCss};
	color: ${({ theme }) => theme.palette.GREY_05};

	background-color: ${({ theme }) => theme.palette.WITHE};
	${({ theme }) => theme.fontTheme.BODY_02};
`;
