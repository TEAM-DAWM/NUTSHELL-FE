import styled from '@emotion/styled';

import ModalHeaderBtn from '@/components/common/modal/ModalHeaderBtn';
import ModalTextInputTime from '@/components/common/modal/ModalTextInputTime';
import TextInputBox from '@/components/common/modal/TextInputBox';
import TextboxInput from '@/components/common/textbox/TextboxInput';

import { SizeType } from '@/types/textInputType';

interface ModalProps {
	isOpen: boolean;
	sizeType: SizeType;
}

function Modal({ isOpen, sizeType }: ModalProps) {
	if (!isOpen) return;
	return (
		<ModalLayout type={sizeType.type}>
			<ModalHeader>
				<TextboxInput variant="date" />
				<ModalHeaderBtn type={sizeType.type} />
			</ModalHeader>
			<ModalBody>
				<TextInputBox type={sizeType.type} />
				{sizeType.type === 'long' && <ModalTextInputTime />}
			</ModalBody>
			<ModalFooter>
				<button>취소</button>
				<button>확인</button>
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
	box-sizing: border-box;
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

const ModalFooter = styled.div`
	display: flex;
	gap: 0.4rem;
	justify-content: flex-end;
`;

export default Modal;
