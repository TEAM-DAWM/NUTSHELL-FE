import styled from '@emotion/styled';
import { useState } from 'react';

import DatePickerCustom from '../common/datePicker/DatePickerCustom';

import DatePickerPlaceholder from './DatePickerPlaceholder';
import PastDateBtn from './pastDateBtnStyle';

import GETPASTDATE from '@/constants/getPastDate';

interface DateAreaProps {
	isHover: boolean;
	isPressed: boolean;
	handleDate: (newStartDate: Date, newEndDate: Date) => void;
}

// startDate : 시작 날짜 ; endDate : 마감 날짜

function DateArea({ isHover, isPressed, handleDate }: DateAreaProps) {
	const today = new Date();
	const initialStartDate = new Date(today);
	initialStartDate.setDate(today.getDate() - 13);

	const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
	const [endDate, setEndDate] = useState<Date | null>(today);
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked((prev) => !prev);
		if (startDate && endDate) handleDate(startDate, endDate);
	};

	// 날짜가 확정되면 부모 컴포넌트에 전달하는 함수
	const handleConfirmDates = (newStartDate: Date | null, newEndDate: Date | null) => {
		setStartDate(newStartDate);
		setEndDate(newEndDate);
		if (newStartDate && newEndDate) handleDate(newStartDate, newEndDate);
		setIsClicked(false);
	};

	const handleClickPastDate = (getPastDate: number) => {
		const newStartDate = new Date(today);
		newStartDate.setDate(today.getDate() - getPastDate);
		handleConfirmDates(newStartDate, today); // 날짜 확정
	};

	return (
		<DatePickerCustomLayout>
			<DateAreaLayout>
				<DatePickerContainer>
					<DatePickerPlaceholder isHover isPressed endDate={endDate} startDate={startDate} handleClick={handleClick} />
					<DatePickerWrapper>
						<DatePickerCustom
							isOpen={isClicked}
							onClose={() => {
								setIsClicked(false);
							}}
							endDate={endDate}
							startDate={startDate}
							handleConfirmDates={handleConfirmDates}
						/>
					</DatePickerWrapper>
				</DatePickerContainer>
				<PastDateWrapper>
					<PastDateBtn
						isHover={isHover}
						isPressed={isPressed}
						onClick={() => {
							handleClickPastDate(GETPASTDATE.getPastDateWeek);
						}}
					>
						지난 1주일
					</PastDateBtn>
					<PastDateBtn
						isHover={isHover}
						isPressed={isPressed}
						onClick={() => {
							handleClickPastDate(GETPASTDATE.getPastDateMonth);
						}}
					>
						지난 1달
					</PastDateBtn>
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
	width: fit-content;
	margin: 1rem 0 0.7rem 1.4rem;
`;

const DatePickerContainer = styled.div`
	position: relative;
	display: flex;
`;

const PastDateWrapper = styled.span`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	width: 14.3rem;
	height: 2.6rem;
`;

const DatePickerWrapper = styled.div`
	position: absolute;
	bottom: 4.6rem;
	left: 0;
`;
