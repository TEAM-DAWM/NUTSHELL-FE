import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

import { SizeType } from '@/types/textInputType';

interface TextInputDescProps extends SizeType {
	desc: string;
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
function TextInputDesc({ type, desc, onChange }: TextInputDescProps) {
	return (
		<TextInputDescLayout placeholder="설명 추가" type={type} defaultValue={desc} maxLength={120} onChange={onChange} />
	);
}

const TextInputDescLayout = styled.textarea<{ type: string }>`
	box-sizing: border-box;
	width: ${({ type }) => (type === 'long' ? '34.8rem' : '30.4rem')};
	height: ${({ type }) => (type === 'long' ? '14.5rem' : '18rem')};
	padding: 1.2rem;

	${({ theme }) => theme.fontTheme.BODY_02};
	border: solid 1px ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 5px;

	&:focus {
		outline: none;
	}
	resize: none;
`;
export default TextInputDesc;
