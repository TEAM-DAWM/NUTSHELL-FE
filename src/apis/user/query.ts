import { useQuery } from '@tanstack/react-query';

import getUserInfo from '@/apis/user/axios';
import { UserInfoResponse } from '@/apis/user/userInfoType';

/** Task 리스트 조회 */
const useGetUserInfo = () => {
	const { data } = useQuery<UserInfoResponse, Error>({
		queryKey: ['user'],
		queryFn: () => getUserInfo(),
	});

	return { data };
};

export default useGetUserInfo;
