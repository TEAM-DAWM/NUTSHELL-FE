import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyle.tsx';
import type { Preview } from '@storybook/react';
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};
export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
];
export default preview;
