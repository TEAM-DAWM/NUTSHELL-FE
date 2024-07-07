import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface TextBtnProps {
	text: string;
	size: 'small' | 'medium';
	color: 'blue' | 'white' | 'black';
	isLight: boolean;
}

const TextBtn = ({ size, text, color, isLight }: TextBtnProps) => {
	return (
		<>
			{size === 'small' ? (
				<SmallButton color={color} isLight={isLight}>
					{text}
				</SmallButton>
			) : (
				<BigButton color={color} isLight={isLight}>
					{text}
				</BigButton>
			)}
		</>
	);
};

export default TextBtn;

const textButtonCss = css`
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 8px;
`;

const SmallButton = styled.button<{ color: string; isLight: boolean }>`
	width: 4.5rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	${textButtonCss}
	${({ theme }) => theme.fontTheme.CAPTION_01}; /* 폰트 수정 필요 */
	${({ theme, color, isLight }) =>
		!isLight &&
		css`
			color: ${color === 'blue' ? theme.palette.WITHE : color === 'white' ? theme.palette.BLACK : theme.palette.WITHE};

			background-color: ${color === 'blue'
				? theme.palette.PRIMARY
				: color === 'white'
					? theme.palette.WITHE
					: theme.palette.BLACK};

			&:hover {
				background-color: ${color === 'blue'
					? theme.palette.BLUE_HOVER
					: color === 'white'
						? theme.palette.GREY_04
						: theme.palette.GREY_06};
			}

			&:active {
				color: ${color === 'blue'
					? theme.palette.BLUE_DEFAULT
					: color === 'white'
						? theme.palette.BLACK
						: theme.palette.WITHE};

				background-color: ${color === 'blue'
					? theme.palette.BLUE_PASSED
					: color === 'white'
						? theme.palette.GREY_05
						: theme.palette.GREY_06};
			}
		`}
	${({ theme, color, isLight }) =>
		isLight &&
		css`
			color: ${color === 'blue'
				? theme.palette.WITHE
				: color === 'white'
					? theme.palette.GREY_06
					: theme.palette.GREY_04};

			background-color: ${color === 'blue'
				? theme.palette.BLUE_DISABLED
				: color === 'white'
					? theme.palette.GREY_03
					: theme.palette.GREY_06};
		`}
`;

const BigButton = styled.button<{ color: string; isLight: boolean }>`
	width: 6rem;
	height: 3.2rem;
	padding: 0.7rem 1.6rem;

	${textButtonCss}
	${({ theme }) => theme.fontTheme.BODY_02};
	${({ theme, color, isLight }) =>
		!isLight &&
		css`
			color: ${color === 'blue' ? theme.palette.WITHE : color === 'white' ? theme.palette.BLACK : theme.palette.WITHE};

			background-color: ${color === 'blue'
				? theme.palette.PRIMARY
				: color === 'white'
					? theme.palette.WITHE
					: theme.palette.BLACK};

			&:hover {
				background-color: ${color === 'blue'
					? theme.palette.BLUE_HOVER
					: color === 'white'
						? theme.palette.GREY_04
						: theme.palette.GREY_06};
			}

			&:active {
				color: ${color === 'blue'
					? theme.palette.BLUE_DEFAULT
					: color === 'white'
						? theme.palette.BLACK
						: theme.palette.WITHE};

				background-color: ${color === 'blue'
					? theme.palette.BLUE_PASSED
					: color === 'white'
						? theme.palette.GREY_05
						: theme.palette.GREY_06};
			}
		`}
	${({ theme, color, isLight }) =>
		isLight &&
		css`
			color: ${color === 'blue'
				? theme.palette.WITHE
				: color === 'white'
					? theme.palette.GREY_06
					: theme.palette.GREY_04};

			background-color: ${color === 'blue'
				? theme.palette.BLUE_DISABLED
				: color === 'white'
					? theme.palette.GREY_03
					: theme.palette.GREY_06};
		`}
	box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
`;
