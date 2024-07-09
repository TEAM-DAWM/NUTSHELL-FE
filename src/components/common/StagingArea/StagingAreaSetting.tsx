import styled from '@emotion/styled';
import { useState } from 'react';

import ArrangeBtn from '../arrangeBtn/ArrangeBtn';
import TextBtn from '../button/textBtn/TextBtn';

function StagingAreaSetting() {
	const [activeButton, setActiveButton] = useState<'전체' | '취소'>('전체');

	const handleButtonClick = (button: '전체' | '취소') => {
		setActiveButton(button);
	};

	return (
		<StagingAreaSettingLayout>
			<TextBtnContainer>
				<TextBtn
					size="small"
					text="전체"
					color={activeButton === '전체' ? 'BLUE' : 'WHITE'}
					mode={activeButton === '전체' ? 'DEFAULT' : 'LIGHT'}
					isHover
					isPressed
					onClick={() => handleButtonClick('전체')}
				/>
				<TextBtn
					size="small"
					text="취소"
					color={activeButton === '취소' ? 'BLUE' : 'WHITE'}
					mode={activeButton === '취소' ? 'DEFAULT' : 'LIGHT'}
					isHover
					isPressed
					onClick={() => handleButtonClick('취소')}
				/>
			</TextBtnContainer>
			<ArrangeBtn type="set" mode="DISABLED" color="WHITE" size="small" />
		</StagingAreaSettingLayout>
	);
}

export default StagingAreaSetting;

const StagingAreaSettingLayout = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	justify-content: space-between;
`;

const TextBtnContainer = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	padding-left: 0.4rem;
`;
