import palette from './palette';

const button = {
	BLUE: {
		DISABLED: {
			ICON: palette.Grey.White,
			BG: palette.Blue.Blue3,
		},
		DEFAULT: {
			ICON: palette.Grey.White,
			BG: palette.Primary,
		},
		HOVER: {
			ICON: palette.Grey.White,
			BG: palette.Blue.Blue8,
		},
		PRESSED: {
			ICON: palette.Blue.Blue4,
			BG: palette.Blue.Blue9,
		},
	},
	WHITE: {
		DISABLED: {
			ICON: palette.Grey.Grey4,
			BG: palette.Grey.Grey1,
		},
		DEFAULT: {
			ICON: palette.Grey.Black,
			BG: palette.Grey.White,
		},
		HOVER: {
			ICON: palette.Grey.Black,
			BG: palette.Grey.Grey4,
		},
		PRESSED: {
			ICON: palette.Grey.Grey8,
			BG: palette.Grey.Grey3,
		},
	},
	BLACK: {
		DISABLED: {
			ICON: palette.Grey.Grey5,
			BG: palette.Grey.Grey7,
		},
		DEFAULT: {
			ICON: palette.Grey.White,
			BG: palette.Grey.Black,
		},
		HOVER: {
			ICON: palette.Grey.White,
			BG: palette.Grey.Grey6,
		},
		PRESSED: {
			ICON: palette.Grey.White,
			BG: palette.Grey.Grey8,
		},
	},
};

export default button;
