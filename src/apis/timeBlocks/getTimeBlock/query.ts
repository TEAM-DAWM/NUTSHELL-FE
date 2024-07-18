import { useQuery } from '@tanstack/react-query';

import getTimeBlock from './axios';
import { GetTimeBlokType } from './GetTimeBlockType';

/** TimeBlock 리스트 조회 */
const useGetTimeBlock = ({ startDate, range, categories }: GetTimeBlokType) =>
	useQuery({
		queryKey: ['timeblock', startDate, range, categories],
		queryFn: () => getTimeBlock({ startDate, range, categories }),
	});

export default useGetTimeBlock;
