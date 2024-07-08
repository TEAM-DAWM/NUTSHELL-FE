import styled from '@emotion/styled';

import Check1Btn from './Check1Btn';

import SettingCheck4 from '@/components/common/button/SettingCheck4Btn';
import SettingDeleteBtn from '@/components/common/button/SettingDeleteBtn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';

function HoverBarBtn() {
	return (
		<HoverBarBtnLayout>
			<SettingDeleteBtn isHover={false} isPressed />
			<TextBtn size="small" text="취소" color="WHITE" mode="LIGHT" isHover={false} isPressed />
			<SettingCheck4 isHover={false} isPressed />
			<Check1Btn type="setting" isHover={false} isPressed />
		</HoverBarBtnLayout>
	);
}

export default HoverBarBtn;

const HoverBarBtnLayout = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	width: 13.7rem;
	height: 3.2rem;
	padding: 0.4rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.White};
	border-radius: 12px;
`;
