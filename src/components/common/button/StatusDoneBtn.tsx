import styled from '@emotion/styled';

import ProgressBtn from '@/components/common/button/ProgressBtn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';

function StatusDoneBtn() {
	return (
		<StatusDoneBtnLayout>
			<TextBtn size="small" text="취소" color="WHITE" mode="LIGHT" isAction />
			<ProgressBtn type="setting" />
		</StatusDoneBtnLayout>
	);
}

export default StatusDoneBtn;

const StatusDoneBtnLayout = styled.div`
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
