import styled from '@emotion/styled';

import { SizeType } from '@/types/textInputType';

const TextInputDesc = ({ type }: SizeType) => {
	return <TextInputDescLayout placeholder="설명 추가" type={type} />;
};

const TextInputDescLayout = styled.textarea<{ type: string }>`
	width: ${({ type }) => (type === 'long' ? '34.8rem' : '30.4rem')};
	height: ${({ type }) => (type === 'long' ? '14.5rem' : '18rem')};

	${({ theme }) => theme.fontTheme.BODY_02};
	border: solid 1px ${({ theme }) => theme.palette.GREY_01};
	border-radius: 5px;
`;
export default TextInputDesc;
