import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface Progress {
	type: 'setting' | 'defaultProgress';
}

const ProgressBtn = ({ type }: Progress) => {
	return (
		<>
			{type === 'setting' ? (
				<SettingProgressLayout>
					<StyledSettingProgress />
				</SettingProgressLayout>
			) : (
				<DefaultProgressLayout>
					<StyledProgressIcon />
				</DefaultProgressLayout>
			)}
		</>
	);
};

export default ProgressBtn;

const SettingProgressLayout = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	border-radius: 8px;

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_DEFAULT}; /* 수정 필요 */
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.PRIMARY}; /* 수정 필요 */
		path {
			stroke: ${({ theme }) => theme.palette.WITHE};
		}
	}
`;

const StyledSettingProgress = styled(Icons.SettingProgress)`
	width: 1.4rem;
`;

const DefaultProgressLayout = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	border-radius: 10px;
`;

const StyledProgressIcon = styled(Icons.ProgressIcon)`
	width: 1.8667rem;
`;
