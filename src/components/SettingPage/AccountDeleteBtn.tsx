import styled from '@emotion/styled';
import { useState } from 'react';

import useEventsDelete from '@/apis/calendar/deleteCalendar/query';
import SettingCheckBtn from '@/components/common/button/settingBtn/SettingCheckBtn';
import ModalDeleteDetail from '@/components/common/modal/ModalDeleteDetail';

interface AccountDeleteBtnProps {
	accountId: number;
}

function AccountDeleteBtn({ accountId }: AccountDeleteBtnProps) {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleClickBtn = () => {
		setModalOpen((prev) => !prev);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const { mutate: deleteAccount } = useEventsDelete();

	const handleDeleteBtn = () => {
		deleteAccount(accountId);
	};

	return (
		<AccountDeleteBtnContainer>
			<SettingCheckBtn size="small" type="close" isHover isPressed={false} isActive onClick={handleClickBtn} />
			{isModalOpen && <ModalDeleteDetail onClose={handleCloseModal} top={321} left={482} onDelete={handleDeleteBtn} />}
		</AccountDeleteBtnContainer>
	);
}

const AccountDeleteBtnContainer = styled.div`
	position: relative;
`;

export default AccountDeleteBtn;
