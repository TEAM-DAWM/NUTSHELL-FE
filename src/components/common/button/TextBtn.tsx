import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface TextBtnProps {
	text: string;
	size: 'small' | 'medium';
}

const TextBtn = ({ size, text }: TextBtnProps) => {
	return <>{size === 'small' ? <SmallButton>{text}</SmallButton> : <BigButton>{text}</BigButton>}</>;
};

export default TextBtn;

const textButtonCss = css`
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 8px;
`;

const SmallButton = styled.button`
	width: 4.5rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	${textButtonCss}
`;

const BigButton = styled.button`
	width: 6rem;
	height: 3.2rem;
	padding: 0.7rem 1.6rem;

	box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
	${textButtonCss}
`;
