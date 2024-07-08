import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface Check1 {
	type: 'setting' | 'done';
}

function Check1Btn({ type }: Check1) {
	return (
		<div>
			{type === 'setting' ? (
				<SettingCheck1Layout>
					<StlyedSettingCheck1Ic />
				</SettingCheck1Layout>
			) : (
				<DoneLayout>
					<StlyedDoneIc />
				</DoneLayout>
			)}
		</div>
	);
}

export default Check1Btn;

const alignCenterStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SettingCheck1Layout = styled.button`
	${alignCenterStyle}
	width: 2.4rem;
	height: 2.4rem;

	background-color: ${({ theme }) => theme.palette.Blue.Blue1};
	border-radius: 8px;

	&:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.Primary};

		path {
			stroke: ${({ theme }) => theme.palette.Grey.White};
		}
	}
`;

const StlyedSettingCheck1Ic = styled(Icons.SettingCheck1)`
	width: 1.3911rem;
	height: 1.3911rem;
`;

const DoneLayout = styled.button`
	${alignCenterStyle}
	width: 3.2rem;
	height: 3.2rem;

	background-color: ${({ theme }) => theme.palette.Blue.Blue1};
	border-radius: 10px;
`;

const StlyedDoneIc = styled(Icons.DoneIcon)`
	width: 1.8548rem;
	height: 1.8548rem;
`;
