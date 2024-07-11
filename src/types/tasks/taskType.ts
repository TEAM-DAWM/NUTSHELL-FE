export interface TaskType {
	id: number;
	name: string;
	deadLine?: {
		date: string;
		time: string;
	};
	hasDescription: boolean;
	status: '진행중' | '미완료' | '완료' | '지연';
}
