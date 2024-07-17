import styled from '@emotion/styled';
import { useState } from 'react';

import ArrangeBtn from '../common/arrangeBtn/ArrangeBtn';
import DateCorrectionModal from '../common/datePicker/DateCorrectionModal';
import ModalBackdrop from '../common/modal/ModalBackdrop';

import TextBtn from '@/components/common/button/textBtn/TextBtn';
import MODAL from '@/constants/modalLocation';

interface TargetControlSectionProps {
	onClickPrevDate: (day: number) => void;
	onClickNextDate: (day: number) => void;
	onClickTodayDate: () => void;
}

function TargetControlSection({ onClickPrevDate, onClickNextDate, onClickTodayDate }: TargetControlSectionProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleArrangeBtnClick = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<TargetControlSectionLayout>
				<BtnWrapper>
					<TextBtn text="오늘" size="small" color="BLACK" mode="DEFAULT" isHover isPressed onClick={onClickTodayDate} />
					<ArrangeBtn color="BLACK" mode="DEFAULT" size="small" type="left" onClick={onClickPrevDate} />
					<ArrangeBtn color="BLACK" mode="DEFAULT" size="small" type="right" onClick={onClickNextDate} />
				</BtnWrapper>
				<ModalLayout>
					<ArrangeBtn color="WHITE" mode="DEFAULT" size="small" type="calendar" onClick={handleArrangeBtnClick} />
					{isModalOpen && (
						<DateCorrectionModal
							top={MODAL.DATE_CORRECTION.TARGET.top}
							left={MODAL.DATE_CORRECTION.TARGET.left}
							date={null}
							time={null}
							onClick={handleCloseModal}
						/>
					)}
				</ModalLayout>
			</TargetControlSectionLayout>
			{isModalOpen && <ModalBackdrop onClick={handleCloseModal} />}
		</>
	);
}

const ModalLayout = styled.div`
	position: relative;
`;

const TargetControlSectionLayout = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	margin-bottom: 1.3rem;
	padding: 0 0.4rem;
`;
const BtnWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
	width: fit-content;
`;

export default TargetControlSection;
