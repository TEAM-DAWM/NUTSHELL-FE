import styled from '@emotion/styled';
import { useState } from 'react';

import Check1Btn from '@/components/common/button/Check1Btn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';

function StatusInProgressBtn() {
	const [isPressed, setIsPressed] = useState(false);

	const handleSettingCheckClick = () => {
		setIsPressed((prev) => !prev);
	};

	return (
		<StatusInProgressBtnLayout isPressed={isPressed}>
			{!isPressed && <TextBtn size="small" text="취소" color="WHITE" mode="LIGHT" isHover isPressed />}
			<Check1Btn type="setting" isHover={false} isPressed={isPressed} onClick={handleSettingCheckClick} />
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
