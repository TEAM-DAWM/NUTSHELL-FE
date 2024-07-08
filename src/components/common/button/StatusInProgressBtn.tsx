import styled from '@emotion/styled';

import Check1Btn from '@/components/common/button/Check1Btn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';

function StatusInProgressBtn() {
	return (
		<StatusInProgressBtnLayout>
			<TextBtn size="small" text="취소" color="WHITE" mode="LIGHT" isHover isPressed />
			<Check1Btn type="setting" isHover isPressed />
		</StatusInProgressBtnLayout>
	);
}

export default StatusInProgressBtn;

const StatusInProgressBtnLayout = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
	width: 7.3rem;
	height: 2.4rem;
	padding: 0.4rem;

	border: 1px solid var(${({ theme }) => theme.palette.Grey.White});
	border-radius: 10px;
`;
