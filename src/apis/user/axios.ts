import { privateInstance } from '@/apis/instance';
import { UserInfoResponse } from '@/apis/user/userInfoType';

const getUserInfo = async (): Promise<UserInfoResponse> => {
	const response = await privateInstance.get<UserInfoResponse>('/api/users');
	return response.data;
};

export default getUserInfo;
