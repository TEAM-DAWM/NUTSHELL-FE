import styled from '@emotion/styled';

import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import SettingDeleteBtn from '@/components/common/button/settingBtn/SettingDeleteBtn';
import { SizeType } from '@/types/textInputType';

function ModalHeaderBtn({ type }: SizeType) {
	return (
		<ModalHeaderBtnLayout>
			<SettingDeleteBtn size="big" isHover isPressed={false} isActive />
			{type === 'long' && <SettingCheckBtn type="progress" size="big" isHover isPressed={false} isActive />}
			<SettingCheckBtn type="complete" size="big" isHover isPressed={false} isActive />
		</ModalHeaderBtnLayout>
	);
}

const ModalHeaderBtnLayout = styled.div`
	display: flex;
	gap: 0.6rem;
`;

export default ModalHeaderBtn;
