import styled from '@emotion/styled';

import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputTime from '@/components/common/textbox/TextInputTime';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import TextboxInput from '@/components/common/textbox/TextboxInput';

import Icons from '@/assets/svg/index';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	modalSize: 'short' | 'long';
}

function Modal({ isOpen, onClose, modalSize }: ModalProps) {
	if (!isOpen) return;
	return (
		<ModalLayout type={modalSize}>
			<ModalHeader>
				<TextboxInput variant="date" />
			</ModalHeader>
			<ModalBody>
				<TextInputBox>
					<TextInputTitle type={modalSize} />
					<TextInputDesc type={modalSize} />
				</TextInputBox>
				{modalSize === 'long' && (
					<ModalTextInputTime>
						<TextInputTimeBox>
							<Icons.Icn_clock width={24} height={24} />
							<TextInputTime time="start" />
							<TextInputTime time="end" />
						</TextInputTimeBox>
						<TextInputTime time="total" />
					</ModalTextInputTime>
				)}
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
	width: ${({ type }) => (type === 'long' ? '37.2rem' : '32.8rem')};
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

const ModalTextInputTime = styled.div`
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

const ModalFooter = styled.div`
	display: flex;
	gap: 0.4rem;
	justify-content: flex-end;
`;

export default Modal;
