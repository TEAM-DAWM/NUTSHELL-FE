import { ThemeProvider } from '@emotion/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App.tsx';
import GlobalStyle from '@/styles/GlobalStyle.tsx';
import { theme } from '@/styles/theme.ts';

import '@/styles/font.css';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID;

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
	<GoogleOAuthProvider clientId={CLIENT_ID}>
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" position="left" />
			</QueryClientProvider>
		</React.StrictMode>
	</GoogleOAuthProvider>
);
