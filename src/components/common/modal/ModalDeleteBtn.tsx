import styled from '@emotion/styled';
import { useState } from 'react';

import SettingDeleteBtn from '@/components/common/button/settingBtn/SettingDeleteBtn';
import ModalDeleteDetail from '@/components/common/modal/ModalDeleteDetail';

function ModalDeleteBtn() {
	const [isClicked, setIsClicked] = useState(false);

	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const handleBtnClick = (e: React.MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setTop(rect.bottom + 6);
		setLeft(rect.left);
		setIsClicked((prev) => !prev);
	};

	return (
		<ModalDeleteBtnLayout>
			<SettingDeleteBtn size="big" isHover isPressed={false} isActive onClick={handleBtnClick} />
			{isClicked && (
				<ModalDeleteDetailWapper>
					<ModalDeleteDetail top={top} left={left} onClose={handleBtnClick} />
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
