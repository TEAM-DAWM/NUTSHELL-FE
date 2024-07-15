import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import DatePickerCustom from '../common/datePicker/DatePickerCustom';

import DatePickerPlaceholder from './DatePickerPlaceholder';
import PastDateBtn from './pastDateBtnStyle';

interface DateAreaProps {
	isHover: boolean;
	isPressed: boolean;
}

// startDate : 시작 날짜 ; endDate : 마감 날짜

function DateArea({ isHover, isPressed }: DateAreaProps) {
	const today = new Date();
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked((prev) => !prev);
	};

	const handleStartDate = (date: Date | null) => {
		setStartDate(date);
	};

	const handleEndDate = (date: Date | null) => {
		setEndDate(date);
	};

	const handleClickPastDate = (getPastDate: number) => {
		const newStartDate = new Date(today);
		newStartDate.setDate(today.getDate() - getPastDate);
		handleStartDate(newStartDate);

		const newEndDate = new Date(today);
		newEndDate.setDate(today.getDate());
		handleEndDate(newEndDate);
	};

	const getPastDateWeek = 6;
	const getPastDateMonth = 30;
	useEffect(() => {
		const initialStartDate = new Date(today);
		initialStartDate.setDate(today.getDate() - 13);
		handleStartDate(initialStartDate);
	}, []);

	return (
		<DatePickerCustomLayout>
			<DateAreaLayout>
				<DatePickerContainer>
					<DatePickerPlaceholder
						isHover
						isPressed
						endDate={endDate || today}
						startDate={startDate || today}
						handleClick={handleClick}
					/>
					<DatePickerWrapper>
						<DatePickerCustom
							isOpen={isClicked}
							onClose={handleClick}
							endDate={endDate}
							startDate={startDate}
							handleStartDate={handleStartDate}
							handleEndDate={handleEndDate}
						/>
					</DatePickerWrapper>
				</DatePickerContainer>
				<PastDateWrapper>
					<PastDateBtn
						isHover={isHover}
						isPressed={isPressed}
						onClick={() => {
							handleClickPastDate(getPastDateWeek);
						}}
					>
						지난 1주일
					</PastDateBtn>
					<PastDateBtn
						isHover={isHover}
						isPressed={isPressed}
						onClick={() => {
							handleClickPastDate(getPastDateMonth);
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
	width: 51.9rem;
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
