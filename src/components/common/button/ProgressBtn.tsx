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
					<Icons.SettingProgress />
				</SettingProgressLayout>
			) : (
				<DefaultProgressLayout>
					<Icons.ProgressIcon width="20" height="4" />
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

	border-radius: 8px;
`;

const DefaultProgressLayout = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	border-radius: 10px;
`;
