import styled from '@emotion/styled';
import { useState } from 'react';

import useUpdateTaskStatus from '@/apis/tasks/updateTaskStatus/query';
import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';

interface StatusInProgressBtnProps {
	taskId: number;
	targetDate: string | null;
}
function StatusInProgressBtn({ taskId, targetDate }: StatusInProgressBtnProps) {
	const [isPressed, setIsPressed] = useState(false);
	const { mutate: updateStateMutate } = useUpdateTaskStatus();

	const handleSettingCheckClick = () => {
		setIsPressed((prev) => !prev);
	};

	return (
		<StatusInProgressBtnLayout isPressed={isPressed}>
			{!isPressed && (
				<TextBtn
					size="small"
					text="취소"
					color="WHITE"
					mode="LIGHT"
					isHover
					isPressed
					onClick={() => {
						updateStateMutate({ taskId, targetDate, status: '미완료' });
					}}
				/>
			)}
			<SettingCheckBtn
				size="small"
				type="complete"
				isHover={false}
				isPressed={isPressed}
				isActive={false}
				taskId={taskId}
				targetDate={targetDate}
				onClick={handleSettingCheckClick}
			/>
		</StatusInProgressBtnLayout>
	);
}

export default StatusInProgressBtn;

const StatusInProgressBtnLayout = styled.div<{ isPressed: boolean }>`
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
