import styled from '@emotion/styled';
import { useState } from 'react';

import Check1Btn from '@/components/common/button/Check1Btn';
import SettingCheck4 from '@/components/common/button/settingBtn/SettingCheck4Btn';

function StatusTodoBtn() {
	const [isSettingPressed, setIsSettingPressed] = useState(false);
	const [isCheckingPressed, setIsCheckingPressed] = useState(false);

	const handleSettingCheckClick = () => {
		setIsSettingPressed((prev) => !prev);
	};

	const handleCheckingClick = () => {
		setIsCheckingPressed((prev) => !prev);
	};

	return (
		<StatusTodoBtnLayout isPressed={isSettingPressed}>
			{!isCheckingPressed && (
				<SettingCheck4 isHover={false} isPressed={isSettingPressed} onClick={handleSettingCheckClick} />
			)}
			{!isSettingPressed && (
				<Check1Btn type="setting" isHover={false} isPressed={isCheckingPressed} onClick={handleCheckingClick} />
			)}
		</StatusTodoBtnLayout>
	);
}

export default StatusTodoBtn;

const StatusTodoBtnLayout = styled.div<{ isPressed: boolean }>`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: 2.4rem;
	padding: ${({ isPressed }) => (isPressed ? '0' : '0.4rem;')};

	border: 1px solid ${({ theme }) => theme.palette.Grey.White};
	border-radius: 12px;
`;
