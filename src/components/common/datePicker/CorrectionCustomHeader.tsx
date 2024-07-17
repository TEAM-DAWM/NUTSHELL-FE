import styled from '@emotion/styled';

import ArrangeBtn from '../arrangeBtn/ArrangeBtn';
import TextboxInput from '../textbox/TextboxInput';

import formatDatetoString from '@/utils/formatDatetoString';

interface CustomHeaderProps {
	prevDate: Date | null;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled: boolean;
	nextMonthButtonDisabled: boolean;
	onChange: (date: Date | null) => void;
	dateTextRef: React.RefObject<HTMLInputElement>;
}

function CorrectionCustomHeader({
	prevDate,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
	onChange,
	dateTextRef,
}: CustomHeaderProps) {
	return (
		<div className="react-datepicker__header-custom">
			<InfoBox>
				<TextboxInput
					variant="date"
					placeholder={formatDatetoString(prevDate)}
					onDateChange={onChange}
					dateTextRef={dateTextRef}
				/>
				<div className="react-datepicker__navigation-wrapper">
					<BtnWrapper className="react-datepicker__navigation-container">
						<ArrangeBtn
							color="WHITE"
							mode="DEFAULT"
							size="small"
							type="left"
							className="react-datepicker__navigation react-datepicker__navigation--previous"
							onClick={decreaseMonth}
							disabled={prevMonthButtonDisabled}
							aria-label="Previous Month"
						/>
						<ArrangeBtn
							color="WHITE"
							mode="DEFAULT"
							size="small"
							type="right"
							className="react-datepicker__navigation react-datepicker__navigation--next"
							onClick={increaseMonth}
							disabled={nextMonthButtonDisabled}
							aria-label="Next Month"
						/>
					</BtnWrapper>
				</div>
			</InfoBox>
		</div>
	);
}
const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const InfoBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 20.4rem;
	padding-bottom: 0.6rem;
`;
export default CorrectionCustomHeader;
