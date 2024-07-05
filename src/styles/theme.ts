import { css } from '@emotion/react';

const palette = {
	// BLUE
	BLUE_DISABLED: '#B9D0FF',
	BLUE_DEFAULT: '#3876F6',
	BLUE_HOVER: '#245CCE',
	BLUE_PASSED: '#173B86',

	//GRAY
	GRAY_DISABLED: '#E9E9EE',
	GRAY_DEFAULT: '#FFFFFF',
	GRAY_HOVER: '#CDCDCD',
	GRAY_PASSED: '#919191',

	//BLACK
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
};

const fonts = {
	PretendardBold: 'Pretendard-Bold',
	PretendardSemiBold: 'Pretendard-SemiBold',
	PretendardMedium: 'Pretendard-Medium',
};

const fontTheme = {
	DISPLAY_01: css`
		font-size: '64rem';
		font-family: ${fonts.PretendardBold};
		line-height: '76rem';
		letter-spacing: '-2.5%';
	`,

	TITLE_01: css`
		font-size: '44rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '45rem';
		letter-spacing: '-1%';
	`,
	TITLE_02: css`
		font-size: '32rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '40rem';
		letter-spacing: '0%';
	`,
	TITLE_03: css`
		font-size: '24rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '32rem';
		letter-spacing: '0%';
	`,

	HEADLINE_01: css`
		font-size: '22rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '30rem';
		letter-spacing: '0%';
	`,
	HEADLINE_02: css`
		font-size: '20rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '28rem';
		letter-spacing: '0%';
	`,
	HEADLINE_03: css`
		font-size: '18rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '24rem';
		letter-spacing: '0%';
	`,

	BODY_01: css`
		font-size: '16rem';
		font-family: ${fonts.PretendardMedium};
		line-height: '20rem';
		letter-spacing: '-2%';
	`,
	BODY_02: css`
		font-size: '16rem';
		font-family: ${fonts.PretendardMedium};
		line-height: '24rem';
		letter-spacing: '-2%';
	`,
	BODY_03: css`
		font-size: '15rem';
		font-family: ${fonts.PretendardMedium};
		line-height: '20rem';
		letter-spacing: '-2%';
	`,
	BODY_04: css`
		font-size: '15rem';
		font-family: ${fonts.PretendardMedium};
		line-height: '24rem';
		letter-spacing: '-2%';
	`,

	LABEL_01: css`
		font-size: '14rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '20rem';
		letter-spacing: '-1%';
	`,
	LABEL_02: css`
		font-size: '14rem';
		font-family: ${fonts.PretendardSemiBold};
		line-height: '24rem';
		letter-spacing: '-1%';
	`,
	LABEL_03: css`
		font-size: '14rem';
		font-family: ${fonts.PretendardMedium};
		line-height: '20rem';
		letter-spacing: '-1%';
	`,

	CAPTION_01: css`
		font-size: '12rem';
		font-family: ${fonts.PretendardMedium};
		line-height: '24rem';
		letter-spacing: '-1%';
	`,
};

export const theme = {
	palette,
	fontTheme,
};

export type ThemeType = typeof theme;
