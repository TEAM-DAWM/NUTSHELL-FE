export interface CreateTaskType {
	name: string;
	deadLine: {
		date: string | null;
		time: string | null;
	};
}
