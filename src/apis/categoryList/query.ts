import { useQuery } from '@tanstack/react-query';

import getCalendarCategory from '@/apis/categoryList/axios';
import { CategoryResponse } from '@/apis/categoryList/categoryResponse';

const useGetCategory = () => {
	const { data, isLoading } = useQuery<CategoryResponse[]>({
		queryKey: ['category'],
		queryFn: () => getCalendarCategory(),
	});

	return { data, isLoading };
};

export default useGetCategory;
