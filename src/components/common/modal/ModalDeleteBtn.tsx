import styled from '@emotion/styled';
import { useState } from 'react';

import SettingDeleteBtn from '@/components/common/button/settingBtn/SettingDeleteBtn';
import ModalDeleteDetail from '@/components/common/modal/ModalDeleteDetail';

function ModalDeleteBtn() {
	const [isClicked, setIsClicked] = useState(false);
	const handleBtnClick = () => {
		setIsClicked((prev) => !prev);
	};
	return (
		<ModalDeleteBtnLayout>
			<SettingDeleteBtn size="big" isHover isPressed={false} isActive onClick={handleBtnClick} />
			{isClicked && (
				<ModalDeleteDetailWapper>
					<ModalDeleteDetail />
				</ModalDeleteDetailWapper>
			)}
		</ModalDeleteBtnLayout>
	);
}

const ModalDeleteBtnLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 3.2rem;
	height: 3.2rem;
`;
const ModalDeleteDetailWapper = styled.div`
	position: relative;
`;

export default ModalDeleteBtn;
