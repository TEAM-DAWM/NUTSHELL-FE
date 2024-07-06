import styled from '@emotion/styled';

import { SizeType } from '@/types/textInputType';

function TextInputTitle({ type }: SizeType) {
	return <TextInputTitleLayout placeholder="제목 추가" type={type} />;
}
const TextInputTitleLayout = styled.input<{ type: string }>`
	${({ theme }) => theme.fontTheme.BODY_02};
	display: flex;
	width: ${({ type }) => (type === 'long' ? '32.4rem' : '28rem')};
	height: 2.4rem;
	padding: 1.2rem;

	border: 1px solid ${({ theme }) => theme.palette.GREY_01};
	border-radius: 5px;

	&:focus {
		outline: none;
	}
`;
export default TextInputTitle;
