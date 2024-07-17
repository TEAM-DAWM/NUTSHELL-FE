export interface TaskType {
	id: number;
	name: string;
	deadLine?: {
		date?: string | null;
		time?: string | null;
	};
	hasDescription: boolean;
	status: '진행중' | '미완료' | '완료' | '지연';
}
