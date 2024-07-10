import styled from '@emotion/styled';

import ArrangeBtn from '../arrangeBtn/ArrangeBtn';
import TextboxInput from '../textbox/TextboxInput';

import DayDiffText from './DayDiffText';

interface CustonHeaderProps {
	startDate: Date | null;
	endDate: Date | null;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled: boolean;
	nextMonthButtonDisabled: boolean;
	onChange: (date: Date, mode: 'start' | 'end') => void;
}

function CustomHeader({
	startDate,
	endDate,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
	onChange,
}: CustonHeaderProps) {
	let diff = 0;
	if (endDate && startDate) {
		diff = Math.abs(endDate.getTime() - startDate.getTime());
		diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
	}

	const onStartChange = (date: Date) => {
		if (endDate && endDate < date) {
			alert('시작날짜가 종료날짜보다 뒤에 있음');
		} else {
			onChange(date, 'start');
		}
	};
	const onEndChange = (date: Date) => {
		// 기타 안되는 예외사항 처리
		// 이후 모달 만들어서 처리하기
		if (startDate && date < startDate) {
			alert('종료날짜가 시작날짜를 앞섬');
		} else {
			onChange(date, 'end');
		}
	};

	return (
		<div className="react-datepicker__header-custom">
			<InfoBox>
				<InfoWrapper>
					<TextboxInput variant="smallDate" dateValue={startDate} onChange={onStartChange} />
					<TextboxInput variant="smallDate" dateValue={endDate} onChange={onEndChange} />
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
