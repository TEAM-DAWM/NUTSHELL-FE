import styled from '@emotion/styled';

import TextInputTime from '@/components/common/textbox/TextInputTime';

import Icons from '@/assets/svg/index';

const ModalTextInputTime = () => {
	return (
		<ModalTextInputTimeLayout>
			<TextInputTimeBox>
				<Icons.Icn_clock width={24} height={24} />
				<TextInputTime time="start" />
				<TextInputTime time="end" />
			</TextInputTimeBox>
			<TextInputTime time="total" />
		</ModalTextInputTimeLayout>
	);
};

const ModalTextInputTimeLayout = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: space-between;
	width: 34.8rem;
`;

const TextInputTimeBox = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
`;

export default ModalTextInputTime;
