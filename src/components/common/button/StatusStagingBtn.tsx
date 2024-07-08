import styled from '@emotion/styled';

import Check1Btn from '@/components/common/button/Check1Btn';
import SettingDeleteBtn from '@/components/common/button/SettingDeleteBtn';

function StatusStagingBtn() {
	return (
		<StatusStagingBtnLayout>
			<SettingDeleteBtn />
			<Check1Btn type="setting" />
		</StatusStagingBtnLayout>
	);
}

export default StatusStagingBtn;

const StatusStagingBtnLayout = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
	width: 5.2rem;
	height: 2.4rem;
	padding: 0.4rem;

	border: 1px solid var(${({ theme }) => theme.palette.WITHE});
	border-radius: 10px;
`;
