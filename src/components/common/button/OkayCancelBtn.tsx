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
	color: ${({ theme }) => theme.palette.Grey.White};

	background-color: ${({ theme }) => theme.palette.Grey.Black};
	${({ theme }) => theme.fontTheme.BODY_02};

	&:hover {
		color: ${({ theme }) => theme.palette.Grey.White};

		background-color: ${({ theme }) => theme.palette.Grey.Grey7};
	}
`;

const CancelBtn = styled.button`
	${OkayCancelBtnCss};
	color: ${({ theme }) => theme.palette.Grey.Grey5};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.fontTheme.BODY_02};

	&:hover {
		color: ${({ theme }) => theme.palette.Grey.Grey6};

		background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	}
`;
