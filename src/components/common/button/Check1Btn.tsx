import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface Check1 {
	type: 'setting' | 'done';
}

const Check1Btn = ({ type }: Check1) => {
	return (
		<>
			{type === 'setting' ? (
				<SettingCheck1Layout>
					<Icons.SettingCheck1 width="17" height="16" />
				</SettingCheck1Layout>
			) : (
				<DoneLayout>
					<Icons.DoneIcon width="22" height="22" />
				</DoneLayout>
			)}
		</>
	);
};

export default Check1Btn;

const SettingCheck1Layout = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* 수정 필요 */
	border-radius: 8px;

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.BLUE_PASSED};
	}
`;

const DoneLayout = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* 수정 필요 */
	border-radius: 10px;
`;
