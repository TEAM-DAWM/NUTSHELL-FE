import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App.tsx';
import GlobalStyle from '@/styles/GlobalStyle.tsx';
import { theme } from '@/styles/theme.ts';

import '@/styles/font.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
