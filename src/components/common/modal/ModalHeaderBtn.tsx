import styled from '@emotion/styled';

import DeleteBtn from '@/components/common/button/DeleteBtn';
import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import { SizeType } from '@/types/textInputType';

function ModalHeaderBtn({ type }: SizeType) {
	return (
		<ModalHeaderBtnLayout>
			<DeleteBtn />
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
