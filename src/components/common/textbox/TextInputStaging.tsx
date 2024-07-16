import styled from '@emotion/styled';
import { useState } from 'react';

import BtnStagingDate from '../BtnDate/BtnStagingDate';
import EnterBtn from '../button/EnterBtn';
import DateCorrectionModal from '../datePicker/DateCorrectionModal';
import ModalBackdrop from '../modal/ModalBackdrop';

import MODAL from '@/constants/modalLocation';

function TextInputStaging() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleArrangeBtnClick = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<StagingLayout>
			<TextArea placeholder="해야하는 일들을 쏟아내보세요." />
			<BtnWrapper>
				<SetDeadLineContainer>
					{isModalOpen && (
						<>
							<DateCorrectionModal
								top={MODAL.DATE_CORRECTION.SET_DEADLINE.top}
								left={MODAL.DATE_CORRECTION.SET_DEADLINE.left}
							/>
							<ModalBackdrop onClick={handleCloseModal} />
						</>
					)}
					<BtnStagingDate onClick={handleArrangeBtnClick} />
				</SetDeadLineContainer>
				{isModalOpen && <ModalBackdrop onClick={handleCloseModal} />}

				<EnterBtn />
			</BtnWrapper>
		</StagingLayout>
	);
}

const StagingLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	width: 31rem;
	height: 7.4rem;
	padding: 0.8rem;

	border: solid 1px ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 100%;

	border: none;

	${({ theme }) => theme.fontTheme.LABEL_03};
	&:focus {
		outline: none;
	}
	resize: none;
`;

const BtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: fit-content;
`;

const SetDeadLineContainer = styled.div`
	position: relative;
`;

export default TextInputStaging;
