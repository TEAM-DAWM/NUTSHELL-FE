/* eslint-disable @typescript-eslint/no-shadow */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { smallSize, bigSize } from './textBtnStyle';

import { TextBtnType } from '@/types/textBtnType';

function TextBtn({ size, text, color, mode, isAction }: TextBtnType) {
	const StyledTextBtn = styled.div<{
		size: string;
		color: 'BLUE' | 'WHITE' | 'BLACK';
		mode: string;
		isAction: boolean;
	}>`
		${({ size }) => (size === 'small' ? smallSize : bigSize)};
		color: ${({ theme }) => theme.textButton[color][mode].TEXT};

		background-color: ${({ theme }) => theme.textButton[color][mode].BG};

		${({ isAction, theme, color }) =>
			isAction &&
			css`
				&:hover {
					color: ${theme.textButton[color].HOVER.TEXT};

					background-color: ${theme.textButton[color].HOVER.BG};
				}

				&:active {
					color: ${theme.textButton[color].PRESSED.TEXT};

					background-color: ${theme.textButton[color].PRESSED.BG};
				}
			`}
	`;
	return (
		<StyledTextBtn size={size} color={color} mode={mode} isAction={isAction}>
			{text}
		</StyledTextBtn>
	);
}

export default TextBtn;
