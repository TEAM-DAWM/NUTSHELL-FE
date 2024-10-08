import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

import { SizeType } from '@/types/textInputType';

interface TextInputTitleProps extends SizeType {
	name: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
function TextInputTitle({ type, name, onChange }: TextInputTitleProps) {
	return (
		<TextInputTitleLayout placeholder="제목 추가" type={type} defaultValue={name} maxLength={20} onChange={onChange} />
	);
}
const TextInputTitleLayout = styled.input<{ type: string }>`
	${({ theme }) => theme.fontTheme.BODY_02};
	display: flex;
	box-sizing: border-box;
	width: ${({ type }) => (type === 'long' ? '34.8rem' : '30.4rem')};
	height: 4.8rem;
	padding: 1.2rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 5px;

	&:focus {
		outline: none;
	}
`;
export default TextInputTitle;
