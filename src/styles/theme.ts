import { css } from '@emotion/react';

const button = {
	BLUE: {
		DISABLED: {
			ICON: '#FFFFFF',
			BG: '#C2D5FF',
		},
		DEFAULT: {
			ICON: '#FFFFFF',
			BG: '#3876F6',
		},
		HOVER: {
			ICON: '#FFFFFF',
			BG: '#245CCE',
		},
		PRESSED: {
			ICON: '#90B2FF',
			BG: '#0D47A1',
		},
	},
	WHITE: {
		DISABLED: {
			ICON: '#C6C6D0',
			BG: '#F4F6FA',
		},
		DEFAULT: {
			ICON: '#212121',
			BG: '#FFFFFF',
		},
		HOVER: {
			ICON: '#212121',
			BG: '#C6C6D0',
		},
		PRESSED: {
			ICON: '#34343C',
			BG: '#9090A0',
		},
	},
	BLACK: {
		DISABLED: {
			ICON: '#9090A0',
			BG: '#464656',
		},
		DEFAULT: {
			ICON: '#FFFFFF',
			BG: '#212121',
		},
		HOVER: {
			ICON: '#FFFFFF',
			BG: '#626273',
		},
		PRESSED: {
			ICON: '#FFFFFF',
			BG: '#34343C',
		},
	},
};

const palette = {
	// BLUE
	BLUE_DISABLED: '#B9D0FF',
	BLUE_DEFAULT: '#3876F6',
	BLUE_HOVER: '#245CCE',
	BLUE_PASSED: '#173B86',

	// GRAY
	GRAY_DISABLED: '#E9E9EE',
	GRAY_DEFAULT: '#FFFFFF',
	GRAY_HOVER: '#CDCDCD',
	GRAY_PASSED: '#919191',

	// BLACK
	BLACK_DISABLED: '#494949',
	BLACK_DEFAULT: '#121212',
	BLACK_HOVER: '#838383',
	BLACK_PASSED: '#363636',

	PRIMARY: '#3876F6',
	SECONDARY: '#FF7950',
	BLACK: '#212121',
	WITHE: '#FFFFFF',
	GREY_01: '#E9E9EE',
	GREY_02: '#C6C6D0',
	GREY_03: '#9090A0',
	GREY_04: '#626273',
	GREY_05: '#464656',
	GREY_06: '#34343C',

	// 지원 임시색상
	grey3: '#E9E9EE',
	grey4: '#C6C6D0',
	grey5: '#9090A0',
	grey6: '#626273',
	black: '#212121',
	primary: '#3876F6',
	white: '#FFFFFF',
};

const fonts = {
	PretendardBold: 'Pretendard-Bold',
	PretendardSemiBold: 'Pretendard-SemiBold',
	PretendardMedium: 'Pretendard-Medium',
};

const fontTheme = {
	DISPLAY_01: css`
		font-size: 6.4rem;
		font-family: ${fonts.PretendardBold};
		line-height: 7.6rem;
		letter-spacing: -0.025em;
	`,

	TITLE_01: css`
		font-size: 4.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 4.5rem;
		letter-spacing: -0.01em;
	`,
	TITLE_02: css`
		font-size: 3.2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 4rem;
		letter-spacing: 0;
	`,
	TITLE_03: css`
		font-size: 2.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 3.2rem;
		letter-spacing: 0;
	`,

	HEADLINE_01: css`
		font-size: 2.2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 3rem;
		letter-spacing: 0;
	`,
	HEADLINE_02: css`
		font-size: 2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.8rem;
		letter-spacing: 0;
	`,
	HEADLINE_03: css`
		font-size: 1.8rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.4rem;
		letter-spacing: 0;
	`,

	BODY_01: css`
		font-size: 1.6rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -0.02em;
	`,
	BODY_02: css`
		font-size: 1.6rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -0.02em;
	`,
	BODY_03: css`
		font-size: 1.5rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -0.02em;
	`,
	BODY_04: css`
		font-size: 1.5rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -0.02em;
	`,

	LABEL_01: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2rem;
		letter-spacing: -0.01em;
	`,
	LABEL_02: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.4rem;
		letter-spacing: -0.01em;
	`,
	LABEL_03: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -0.01em;
	`,

	CAPTION_01: css`
		font-size: 1.2rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -0.01em;
	`,
	CAPTION_02: css`
		font-size: 1.2rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -0.01em;
	`,
};

export const theme = {
	button,
	palette,
	fontTheme,
};

export type ThemeType = typeof theme;
