import styled from '@emotion/styled';

import SettingCheck4 from './SettingCheck4Btn';

import Check1Btn from '@/components/common/button/Check1Btn';

function StatusTodoBtn() {
	return (
		<StatusTodoBtnLayout>
			<SettingCheck4 isHover={false} isPressed />
			<Check1Btn type="setting" isHover={false} isPressed />
		</StatusTodoBtnLayout>
	);
}

export default StatusTodoBtn;

const StatusTodoBtnLayout = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
	width: 5.2rem;
	height: 2.4rem;
	padding: 0.4rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.White};
	border-radius: 12px;
`;
