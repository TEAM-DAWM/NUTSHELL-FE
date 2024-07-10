import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

const textButtonCss = css`
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 8px;
`;

export const smallSize = css`
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	${textButtonCss}
	${theme.fontTheme.CAPTION_02}
`;

export const bigSize = css`
	height: 3.2rem;
	padding: 0.7rem 1.6rem;

	${textButtonCss}
	${theme.fontTheme.BODY_02}
`;
