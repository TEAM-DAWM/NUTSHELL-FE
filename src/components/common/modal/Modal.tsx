import styled from '@emotion/styled';

import ModalTextInputTime from '@/components/common/modal/ModalTextInputTime';
import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputTime from '@/components/common/textbox/TextInputTime';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import TextboxInput from '@/components/common/textbox/TextboxInput';

interface ModalProps {
	isOpen: boolean;
	modalSize: 'short' | 'long';
}

function Modal({ isOpen, modalSize }: ModalProps) {
	if (!isOpen) return;
	return (
		<ModalLayout type={modalSize}>
			<ModalHeader>
				<TextboxInput variant="date" />
				<TextInputTime time="start" />
			</ModalHeader>
			<ModalBody>
				<TextInputBox>
					<TextInputTitle type={modalSize} />
					<TextInputDesc type={modalSize} />
				</TextInputBox>
				{modalSize === 'long' && <ModalTextInputTime />}
			</ModalBody>
			<ModalFooter>
				<TextInputTime time="start" />
				<TextInputTime time="start" />
			</ModalFooter>
		</ModalLayout>
	);
}

const ModalLayout = styled.div<{ type: string }>`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	width: ${({ type }) => (type === 'long' ? '34.8rem' : '30.4rem')};
	padding: 1rem 1.2rem;

	background-color: ${({ theme }) => theme.palette.WITHE};
	box-shadow: 0 1.2rem 3rem 0 rgb(0 0 0 / 30%);
	border-radius: 12px;
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const TextInputBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;

const ModalFooter = styled.div`
	display: flex;
	gap: 0.4rem;
	justify-content: flex-end;
`;

export default Modal;
