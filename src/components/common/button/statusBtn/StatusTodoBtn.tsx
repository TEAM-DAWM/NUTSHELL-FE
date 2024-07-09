import styled from '@emotion/styled';
import { useState } from 'react';

import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';

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
				<SettingCheckBtn
					size="small"
					type="progress"
					isHover={false}
					isPressed={isSettingPressed}
					isActive={false}
					onClick={handleSettingCheckClick}
				/>
			)}
			{!isSettingPressed && (
				<SettingCheckBtn
					size="small"
					type="complete"
					isHover={false}
					isPressed={isCheckingPressed}
					isActive={false}
					onClick={handleCheckingClick}
				/>
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
