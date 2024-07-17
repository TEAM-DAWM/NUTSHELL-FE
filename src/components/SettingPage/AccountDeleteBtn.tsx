import styled from '@emotion/styled';
import { useState } from 'react';

import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import ModalDeleteDetail from '@/components/common/modal/ModalDeleteDetail';

function AccountDeleteBtn() {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleClickBtn = () => {
		setModalOpen((prev) => !prev);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};
	return (
		<AccountDeleteBtnContainer>
			<SettingCheckBtn size="small" type="close" isHover isPressed={false} isActive onClick={handleClickBtn} />
			{isModalOpen && <ModalDeleteDetail onClose={handleCloseModal} top={321} left={482} />}
		</AccountDeleteBtnContainer>
	);
}

const AccountDeleteBtnContainer = styled.div`
	position: relative;
`;

export default AccountDeleteBtn;
