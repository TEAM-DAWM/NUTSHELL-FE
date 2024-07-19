import styled from '@emotion/styled';
import { useState } from 'react';

import useDeleteTask from '@/apis/tasks/deleteTask/query';
import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import SettingDeleteBtn from '@/components/common/button/settingBtn/SettingDeleteBtn';

interface StatusStagingBtnProps {
	taskId: number;
	changeTaskStatus: (updateTaskStatus: string) => void;
}
function StatusStagingBtn({ taskId, changeTaskStatus }: StatusStagingBtnProps) {
	const [isDeletePressed, setIsDeletePressed] = useState(false);
	const [isCheckingPressed, setIsCheckingPressed] = useState(false);
	const { mutate } = useDeleteTask();

	const handleSettingCheckClick = () => {
		setIsDeletePressed((prev) => !prev);
		// 태스크 삭제
		mutate(taskId);
	};

	const handleCheckingClick = () => {
		setIsCheckingPressed((prev) => !prev);
		changeTaskStatus('완료');
	};

	return (
		<StatusStagingBtnLayout>
			{!isCheckingPressed && (
				<SettingDeleteBtn
					size="small"
					isHover={false}
					isActive={false}
					isPressed={isDeletePressed}
					onClick={handleSettingCheckClick}
				/>
			)}
			{!isDeletePressed && (
				<SettingCheckBtn
					size="small"
					type="complete"
					isHover={false}
					isPressed={isCheckingPressed}
					isActive={false}
					onClick={handleCheckingClick}
				/>
			)}
		</StatusStagingBtnLayout>
	);
}

export default StatusStagingBtn;

const StatusStagingBtnLayout = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: 2.4rem;
	padding: 0.4rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.White};
	border-radius: 12px;
`;
