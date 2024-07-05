import styled from '@emotion/styled';

type Props = {
	type: 'long' | 'short';
};

const TextInputTitle = ({ type }: Props) => {
	return <TextInputTitleLayout placeholder="제목 추가" type={type} />;
};
const TextInputTitleLayout = styled.input<{ type: string }>`
	${({ theme }) => theme.fontTheme.BODY_02};
	display: flex;
	width: ${({ type }) => (type === 'long' ? '34.8rem' : '30.4rem')};
	height: 4.8rem;
	padding: 1.2rem;

	border: 1px solid ${({ theme }) => theme.palette.GREY_01};
	border-radius: 5px;

	&:focus {
		outline: none;
	}
`;
export default TextInputTitle;
