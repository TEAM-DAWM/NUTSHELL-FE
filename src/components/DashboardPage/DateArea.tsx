import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import TextBtn from '../common/button/textBtn/TextBtn';
import DatePickerCustom from '../common/datePicker/DatePickerCustom';

import Icons from '@/assets/svg/index';
import formatDatetoString from '@/utils/formatDatetoString';

function DateArea() {
	const today = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState<Date | null>();
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked((prev) => !prev);
	};
	useEffect(() => {
		const newEndDate = new Date(startDate);
		newEndDate.setDate(startDate.getDate() - 13);
		setEndDate(newEndDate);
	}, []);

	return (
		<DatePickerCustomLayout>
			<DateAreaLayout>
				<PlaceholderWrapper onClick={handleClick}>
					<StlyedCalendarIcon />
					<TextBtn size="big" color="WHITE" mode="DEFAULT" isHover isPressed text={formatDatetoString(endDate)} />
					<StyledArrowIcon />
					<TextBtn size="big" color="WHITE" mode="DEFAULT" isHover isPressed text={formatDatetoString(startDate)} />
					<DatePickerWrapper>
						<DatePickerCustom isOpen={isClicked} onClose={handleClick} />
					</DatePickerWrapper>
				</PlaceholderWrapper>
				<PastDateWrapper>
					<PastWeekBtn>지난 1주일</PastWeekBtn>
					<PastMonthBtn>지난 1달</PastMonthBtn>
				</PastDateWrapper>
			</DateAreaLayout>
		</DatePickerCustomLayout>
	);
}

export default DateArea;

const DatePickerCustomLayout = styled.div`
	display: flex;
`;

const DateAreaLayout = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: flex-end;
	justify-content: flex-start;
	width: 51.9rem;
	margin: 1rem 0 0.7rem 1.4rem;
`;

const PlaceholderWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 4rem;
	padding: 0.4rem 1.2rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const StlyedCalendarIcon = styled(Icons.Icn_calander)`
	width: 2rem;
	height: 2rem;

	path {
		stroke: ${({ theme }) => theme.palette.Grey.Grey5};
	}
`;

const StyledArrowIcon = styled(Icons.Icn_arrow_narrow_right)`
	width: 2.4rem;
	height: 2.4rem;

	path {
		stroke: ${({ theme }) => theme.palette.Grey.Black};
	}
`;

const PastDateWrapper = styled.span`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	width: 14.3rem;
	height: 2.6rem;
`;

const PastWeekBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 7.4rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	color: ${({ theme }) => theme.fontTheme.CAPTION_02};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.palette.Grey.Black};
	border: 1px solid;
	border-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const PastMonthBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.3rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	color: ${({ theme }) => theme.fontTheme.CAPTION_02};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.palette.Grey.Black};
	border: 1px solid;
	border-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const DatePickerWrapper = styled.div`
	position: absolute;
	bottom: 0.6rem;
	left: 0;
	z-index: 3;
`;
