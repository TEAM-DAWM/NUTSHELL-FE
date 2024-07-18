import { useQuery } from '@tanstack/react-query';

import getUserInfo from '@/apis/user/axios';
import { UserInfoResponse } from '@/apis/user/userInfoType';

const useGetUserInfo = () => {
	const { data } = useQuery<UserInfoResponse, Error>({
		queryKey: ['user'],
		queryFn: () => getUserInfo(),
	});

	return { data };
};

export default useGetUserInfo;
