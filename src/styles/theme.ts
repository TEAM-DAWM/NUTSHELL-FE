import button from './buttonTheme';
import fontTheme from './fontTheme';
import palette from './palette';
import textButton from './textButtonTheme';

export const theme = {
	textButton,
	button,
	palette,
	fontTheme,
};

export type ThemeType = typeof theme;
