import styled from '@emotion/styled';

import ArrangeBtn from '../../common/arrangeBtn/ArrangeBtn';

interface CustonHeaderProps {
	date: Date;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled: boolean;
	nextMonthButtonDisabled: boolean;
}

function MiniCalendarHeader({
	date,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
}: CustonHeaderProps) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	return (
		<div className="react-datepicker__header-custom">
			<HeaderWrapper className="react-datepicker__navigation-wrapper">
				<TodayText>
					{year}년 {month}월
				</TodayText>
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
			</HeaderWrapper>
		</div>
	);
}
const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const TodayText = styled.h2`
	${({ theme }) => theme.fontTheme.HEADLINE_02};
`;
const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 26rem;
`;
export default MiniCalendarHeader;
