import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';

function StatusDoneBtn() {
	const [isPressed, setIsPressed] = useState(false);

	const handleSettingCheckClick = () => {
		setIsPressed((prev) => !prev);
	};

	return (
		<StatusDoneBtnLayout isPressed={isPressed}>
			{!isPressed && <TextBtn size="small" text="취소" color="WHITE" mode="LIGHT" isHover isPressed />}
			<SettingCheckBtn
				size="small"
				type="progress"
				isHover={false}
				isPressed={isPressed}
				isActive={false}
				onClick={handleSettingCheckClick}
			/>
		</StatusDoneBtnLayout>
	);
}

export default StatusDoneBtn;

const StatusDoneBtnLayout = styled.div<{ isPressed: boolean }>`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: 2.4rem;
	padding: ${({ isPressed }) => (isPressed ? '0' : '0.4rem;')};

	background-color: ${({ isPressed, theme }) => isPressed && theme.palette.Primary};
	border: 1px solid ${({ theme, isPressed }) => (isPressed ? theme.palette.Grey.White : theme.palette.Grey.Grey3)};
	border-radius: 12px;

	${({ isPressed, theme }) =>
		isPressed &&
		css`
			path {
				fill: ${theme.palette.Grey.White};
			}
		`}
`;
