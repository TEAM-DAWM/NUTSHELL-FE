export interface TaskDescriptionType {
	taskId: number;
	targetDate?: string | null;
	isOpen?: boolean;
}

// export interface TaskDescriptionResponseType {
// 	code: string;
// 	data?: {
// 		name: string;
// 		description?: string;
// 		deadLine?: {
// 			date?: Date;
// 			time?: string;
// 		};
// 		status: string;
// 		timeBlock?: {
// 			id: number;
// 			startTime: Date;
// 			endTime: Date;
// 		};
// 	};
// }
