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
	return (
		isOpen && (
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
					<TmpBtn>취소</TmpBtn>
					<TmpBtn>확인</TmpBtn>
				</ModalFooter>
			</ModalLayout>
		)
	);
}

const ModalLayout = styled.div<{ type: string }>`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	box-sizing: border-box;
	width: ${({ type }) => (type === 'long' ? '37.2rem' : '32.8rem')};
	padding: 1rem 1.2rem;

	background-color: ${({ theme }) => theme.palette.Grey.White};
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

const ModalFooter = styled.div`
	display: flex;
	gap: 0.4rem;
	justify-content: flex-end;
`;

const TmpBtn = styled.button`
	display: block;
`;

export default Modal;