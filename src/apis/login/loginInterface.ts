export interface AuthToken {
	accessToken: string;
	refreshToken: string;
}

export interface LoginResponse {
	code: string;
	data: AuthToken;
	message: string | null;
}
