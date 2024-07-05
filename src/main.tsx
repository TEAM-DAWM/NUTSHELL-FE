import App from '@/App.tsx';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from '@/styles/GlobalStyle.tsx';
import '@/styles/font.css';
import { theme } from '@/styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
