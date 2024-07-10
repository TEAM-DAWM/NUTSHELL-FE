/* eslint-disable @typescript-eslint/no-shadow */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { smallSize, bigSize } from './textBtnStyle';

import { TextBtnType } from '@/types/textBtnType';

function TextBtn({ size, text, color, mode, isHover, isPressed, onClick }: TextBtnType) {
	const StyledTextBtn = styled.div<{
		size: string;
		color: 'BLUE' | 'WHITE' | 'BLACK';
		mode: string;
		isHover: boolean;
		isPressed: boolean;
	}>`
		${({ size }) => (size === 'small' ? smallSize : bigSize)};
		color: ${({ theme }) => theme.textButton[color][mode].TEXT};

		background-color: ${({ theme }) => theme.textButton[color][mode].BG};

		${({ isHover, theme, color }) =>
			isHover &&
			css`
				&:hover {
					color: ${theme.textButton[color].HOVER.TEXT};

					background-color: ${theme.textButton[color].HOVER.BG};
				}
			`}
		${({ isPressed, theme, color }) =>
			isPressed &&
			css`
				&:active {
					color: ${theme.textButton[color].PRESSED.TEXT};

					background-color: ${theme.textButton[color].PRESSED.BG};
				}
			`}
	`;

	return (
		<StyledTextBtn size={size} color={color} mode={mode} isHover={isHover} isPressed={isPressed} onClick={onClick}>
			{text}
		</StyledTextBtn>
	);
}

export default TextBtn;
