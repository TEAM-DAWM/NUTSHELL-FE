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
					<StlyedSettingCheck1Ic />
				</SettingCheck1Layout>
			) : (
				<DoneLayout>
					<StlyedDoneIc />
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

		path {
			stroke: ${({ theme }) => theme.palette.WITHE};
		}
	}
`;

const StlyedSettingCheck1Ic = styled(Icons.SettingCheck1)`
	width: 1.3911rem;
	height: 1.3911rem;
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

const StlyedDoneIc = styled(Icons.DoneIcon)`
	width: 1.8548rem;
	height: 1.8548rem;
`;
