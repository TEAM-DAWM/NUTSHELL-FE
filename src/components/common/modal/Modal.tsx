import styled from '@emotion/styled';
import React from 'react';

import BtnDate from '@/components/common/BtnDate/BtnDate';
import OkayCancelBtn from '@/components/common/button/OkayCancelBtn';
import ModalHeaderBtn from '@/components/common/modal/ModalHeaderBtn';
import ModalTextInputTime from '@/components/common/modal/ModalTextInputTime';
import TextInputBox from '@/components/common/modal/TextInputBox';
import { SizeType } from '@/types/textInputType';

interface ModalProps {
	isOpen: boolean;
	sizeType: SizeType;
	top: number;
	left: number;
	onClose: React.MouseEventHandler;
}

function Modal({ isOpen, sizeType, top, left, onClose }: ModalProps) {
	return (
		isOpen && (
			<ModalBackdrop onClick={onClose}>
				<ModalLayout type={sizeType.type} top={top} left={left} onClick={(e) => e.stopPropagation()}>
					<ModalHeader>
						<BtnDate />
						<ModalHeaderBtn type={sizeType.type} />
					</ModalHeader>
					<ModalBody>
						<TextInputBox type={sizeType.type} />
						{sizeType.type === 'long' && <ModalTextInputTime />}
					</ModalBody>
					<ModalFooter>
						<OkayCancelBtn type="cancel" />
						<OkayCancelBtn type="okay" />
					</ModalFooter>
				</ModalLayout>
			</ModalBackdrop>
		)
	);
}

const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	background: rgb(0 0 0 / 50%);
`;

const ModalLayout = styled.div<{ type: string; top: number; left: number }>`
	position: fixed;
	top: ${({ top }) => top}px;
	left: ${({ left }) => left}px;
	z-index: 3;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	box-sizing: border-box;
	width: ${({ type }) => (type === 'long' ? '37.2rem' : '32.8rem')};
	padding: 1rem 1.2rem;
	overflow: hidden;

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

export default Modal;
