import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

const pastDateBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: fit-content;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	border-radius: 8px;
`;

const PastDateBtn = styled.button<{ isHover: boolean; isPressed: boolean }>`
	${pastDateBtnCss}
	color: ${theme.fontTheme.CAPTION_02};

	background-color: ${theme.palette.Grey.White};
	${theme.palette.Grey.Black};
	border: 1px solid;
	border-color: ${theme.palette.Grey.Grey3};

	${({ isHover, theme }) =>
		isHover &&
		css`
			&:hover {
				color: ${theme.textButton.WHITE.HOVER.TEXT};

				background-color: ${theme.textButton.WHITE.HOVER.BG};
			}
		`}
	${({ isPressed, theme }) =>
		isPressed &&
		css`
			&:active {
				color: ${theme.textButton.WHITE.PRESSED.TEXT};

				background-color: ${theme.textButton.WHITE.PRESSED.BG};
			}
		`}
`;

export default PastDateBtn;
