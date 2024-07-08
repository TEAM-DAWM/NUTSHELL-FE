import styled from '@emotion/styled';

import { SizeType } from '@/types/textInputType';

function TextInputDesc({ type }: SizeType) {
	return <TextInputDescLayout placeholder="설명 추가" type={type} />;
}

const TextInputDescLayout = styled.textarea<{ type: string }>`
	box-sizing: border-box;
	width: ${({ type }) => (type === 'long' ? '34.8rem' : '30.4rem')};
	height: ${({ type }) => (type === 'long' ? '14.5rem' : '18rem')};
	padding: 1.2rem;

	${({ theme }) => theme.fontTheme.BODY_02};
	border: solid 1px ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 5px;
`;
export default TextInputDesc;
