interface GoogleCalendar {
	id: number;
	email: string;
}

interface UserData {
	givenName: string;
	familyName: string;
	image: string;
	email: string;
	googleCalenders: GoogleCalendar[];
}

export interface UserInfoResponse {
	code: string;
	data: UserData;
	message: string | null;
}
