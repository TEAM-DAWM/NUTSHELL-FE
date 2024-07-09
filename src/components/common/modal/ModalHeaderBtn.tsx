import styled from '@emotion/styled';

import Check1Btn from '@/components/common/button/Check1Btn';
import DeleteBtn from '@/components/common/button/DeleteBtn';
import SettingCheck4 from '@/components/common/button/settingBtn/SettingCheck4Btn';
import { SizeType } from '@/types/textInputType';

function ModalHeaderBtn({ type }: SizeType) {
	return (
		<ModalHeaderBtnLayout>
			<DeleteBtn />
			{type === 'long' && <SettingCheck4 isHover isPressed={false} />}
			<Check1Btn type="setting" isHover isPressed={false} />
		</ModalHeaderBtnLayout>
	);
}

const ModalHeaderBtnLayout = styled.div`
	display: flex;
	gap: 0.6rem;
`;

export default ModalHeaderBtn;
