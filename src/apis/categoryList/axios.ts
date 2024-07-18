import { CategoryResponse } from '@/apis/categoryList/categoryResponse';
import { privateInstance } from '@/apis/instance';

/** 구글 캘린더 카테고리 get axios */
const getCalendarCategory = async (): Promise<CategoryResponse[]> => {
	const response = await privateInstance.get('/api/google/calendars/categories');
	return response.data.data.emails;
};

export default getCalendarCategory;
