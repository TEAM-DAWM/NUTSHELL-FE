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
	DISPLAY_01: 'Pretendard-Bold',

	TITLE_01: 'Pretendard-SemiBold',
	TITLE_02: 'Pretendard-SemiBold',
	TITLE_03: 'Pretendard-SemiBold',

	HEADLINE_01: 'Pretendard-SemiBold',
	HEADLINE_02: 'Pretendard-SemiBold',
	HEADLINE_03: 'Pretendard-SemiBold',

	BODY_01: 'Pretendard-Medium',
	BODY_02: 'Pretendard-Medium',
	BODY_03: 'Pretendard-Medium',
	BODY_04: 'Pretendard-Medium',

	LABEL_01: 'Pretendard-SemiBold',
	LABEL_02: 'Pretendard-SemiBold',
	LABEL_03: 'Pretendard-Medium',

	CAPTION_01: 'Pretendard-Medium',
};

const fontSizes = {
	DISPLAY_01: '64rem',

	TITLE_01: '44rem',
	TITLE_02: '32rem',
	TITLE_03: '24rem',

	HEADLINE_01: '22rem',
	HEADLINE_02: '20rem',
	HEADLINE_03: '18rem',

	BODY_01: '16rem',
	BODY_02: '16rem',
	BODY_03: '15rem',
	BODY_04: '15rem',

	LABEL_01: '14rem',
	LABEL_02: '14rem',
	LABEL_03: '14rem',

	CAPTION_01: '12rem',
};

export const theme = {
	palette,
	fonts,
	fontSizes,
};

export type ThemeType = typeof theme;
