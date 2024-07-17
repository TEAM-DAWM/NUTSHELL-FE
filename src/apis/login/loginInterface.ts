export interface AuthToken {
	access_token: string;
	refresh_token: string;
}

export interface LoginResponse {
	code: string;
	data: AuthToken;
	message: string | null;
}
