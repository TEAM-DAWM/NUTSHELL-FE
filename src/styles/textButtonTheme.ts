import palette from './palette';

const textButton = {
	BLUE: {
		LIGHT: {
			BG: palette.Blue.Blue3,
			TEXT: palette.Grey.White,
		},
		DEFAULT: {
			BG: palette.Primary,
			TEXT: palette.Grey.White,
		},
		HOVER: {
			BG: palette.Blue.Blue8,
			TEXT: palette.Grey.White,
		},
		PRESSED: {
			BG: palette.Blue.Blue9,
			TEXT: palette.Blue.Blue4,
		},
	},
	WHITE: {
		LIGHT: {
			BG: palette.Grey.Grey3,
			TEXT: palette.Grey.Grey6,
		},
		DEFAULT: {
			BG: palette.Grey.White,
			TEXT: palette.Grey.Black,
		},
		HOVER: {
			BG: palette.Grey.Grey4,
			TEXT: palette.Grey.Black,
		},
		PRESSED: {
			BG: palette.Grey.Grey3,
			TEXT: palette.Grey.Black,
		},
	},
	BLACK: {
		LIGHT: {
			BG: palette.Grey.Grey6,
			TEXT: palette.Grey.Grey4,
		},
		DEFAULT: {
			BG: palette.Grey.Black,
			TEXT: palette.Grey.White,
		},
		HOVER: {
			BG: palette.Grey.Grey7,
			TEXT: palette.Grey.White,
		},
		PRESSED: {
			BG: palette.Grey.Grey8,
			TEXT: palette.Grey.White,
		},
	},
};

export default textButton;
