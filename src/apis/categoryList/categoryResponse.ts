export interface CategoryType {
	id: string;
	name: string;
	color: string;
}

export interface CategoryResponse {
	email: string;
	categories: CategoryType[];
}
