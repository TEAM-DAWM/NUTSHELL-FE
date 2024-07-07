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
					<Icons.SettingCheck1 />
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

	border-radius: 8px;
`;

const DoneLayout = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	border-radius: 10px;
`;
