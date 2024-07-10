import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import TextInputTime from '@/components/common/textbox/TextInputTime';

function ModalTextInputTime() {
	return (
		<ModalTextInputTimeLayout>
			<TextInputTimeBox>
				<TmpIcon />
				<TextInputTime time="start" />
				<TextInputTime time="end" />
			</TextInputTimeBox>
			<TextInputTime time="total" />
		</ModalTextInputTimeLayout>
	);
}

const ModalTextInputTimeLayout = styled.div`
	display: flex;
	gap: 2rem;
	width: 100%;
`;

const TextInputTimeBox = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
`;

const TmpIcon = styled(Icons.ClockCheck)`
	width: 2.4rem;
	height: 2.4rem;
`;

export default ModalTextInputTime;
