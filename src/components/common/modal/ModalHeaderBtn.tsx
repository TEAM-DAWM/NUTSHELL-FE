import styled from '@emotion/styled';

import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import ModalDeleteBtn from '@/components/common/modal/ModalDeleteBtn';
import { SizeType } from '@/types/textInputType';

interface ModalHeaderBtnProps extends SizeType {
	onDelete: () => void;
}

function ModalHeaderBtn({ type, onDelete }: ModalHeaderBtnProps) {
	return (
		<ModalHeaderBtnLayout>
			<ModalDeleteBtn onDelete={onDelete} />
			{type === 'long' && (
				<SettingCheckBtn type="progress" size="big" isHover isPressed={false} isActive targetDate={null} />
			)}
			<SettingCheckBtn type="complete" size="big" isHover isPressed={false} isActive targetDate={null} />
		</ModalHeaderBtnLayout>
	);
}

const ModalHeaderBtnLayout = styled.div`
	display: flex;
	gap: 0.6rem;
`;

export default ModalHeaderBtn;
