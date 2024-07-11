import styled from '@emotion/styled';
import { useState } from 'react';

import SettingDeleteBtn from '@/components/common/button/settingBtn/SettingDeleteBtn';
import ModalDeleteBox from '@/components/common/modal/ModalDeleteBox';

function ModalDeleteBtn() {
	return (
		<ModalDeleteBtnLayout>
			<SettingDeleteBtn size="big" isHover isPressed={false} isActive />
		</ModalDeleteBtnLayout>
	);
}

const ModalDeleteBtnLayout = styled.div``;
export default ModalDeleteBtn;
