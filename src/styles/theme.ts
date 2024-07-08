import button from './buttonTheme';
import fontTheme from './fontTheme';
import palette from './palette';

const textButton = {
	BLUE: {
		LIGHT: {
			BG: '#C2D5FF',
			TEXT: '#FFFFFF',
		},
		DEFAULT: {
			BG: '#3876F6',
			TEXT: '#FFFFFF',
		},
		HOVER: {
			BG: '#245CCE',
			TEXT: 'FFFFFF',
		},
		PRESSED: {
			BG: '#0D47A1',
			TEXT: '#90B2FF',
		},
	},
	WHITE: {
		LIGHT: {
			BG: '#E9E9EE',
			TEXT: '#626273',
		},
		DEFAULT: {
			BG: '#FFFFFF',
			TEXT: '#212121',
		},
		HOVER: {
			BG: '#E9E9EE',
			TEXT: '#212121',
		},
		PRESSED: {
			BG: '#C6C6D0',
			TEXT: '#212121',
		},
	},
	BLACK: {
		LIGHT: {
			BG: '#626273',
			TEXT: '#C6C6D0',
		},
		DEFAULT: {
			BG: '#212121',
			TEXT: '#FFFFFF',
		},
		HOVER: {
			BG: '#464656',
			TEXT: '#FFFFFF',
		},
		PRESSED: {
			BG: '#34343C',
			TEXT: '#FFFFFF',
		},
	},
};

export const theme = {
	textButton,
	button,
	palette,
	fontTheme,
};

export type ThemeType = typeof theme;
