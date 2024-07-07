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
	${({ theme }) => theme.fontTheme.CAPTION_01}; /* 폰트 수정 필요 */
	background-color: ${({ theme }) => theme.palette.WITHE};

	&:hover {
		background-color: ${({ theme }) => theme.palette.GREY_04};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.GREY_05}; /* svg 색 수정 필요 */
	}
`;

const BigButton = styled.button`
	width: 6rem;
	height: 3.2rem;
	padding: 0.7rem 1.6rem;

	box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);

	${textButtonCss}
	${({ theme }) => theme.fontTheme.BODY_02};
`;
