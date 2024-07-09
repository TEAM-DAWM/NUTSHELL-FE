import styled from '@emotion/styled';

import ArrangeBtn from '../arrangeBtn/ArrangeBtn';
import TextboxInput from '../textbox/TextboxInput';

import DayDiffText from './DayDiffText';

function CustomHeader({
	startDate,
	endDate,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
}: {
	startDate: Date | null;
	endDate: Date | null;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled: boolean;
	nextMonthButtonDisabled: boolean;
}) {
	let diff = 0;
	if (endDate && startDate) {
		diff = Math.abs(endDate.getTime() - startDate.getTime());
		diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
	}
	return (
		<div className="react-datepicker__header-custom">
			<InfoBox>
				<InfoWrapper>
					<TextboxInput variant="smallDate" dateValue={startDate} />
					<TextboxInput variant="smallDate" dateValue={endDate} />
				</InfoWrapper>
				<DayDiffText diff={diff} />
			</InfoBox>
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
		</div>
	);
}
const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const InfoWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
`;
const InfoBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 22.8rem;
	padding-bottom: 0.6rem;
`;
export default CustomHeader;
