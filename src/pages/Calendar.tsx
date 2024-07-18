import styled from '@emotion/styled';
import { useState } from 'react';

import { CategoryResponse } from '@/apis/categoryList/categoryResponse';
import useGetCategory from '@/apis/categoryList/query';
import CategoryBox from '@/components/calendarPage/CategoryBox';
import MiniCalendar from '@/components/calendarPage/miniCalendar/MiniCalendar';
import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';

function Calendar() {
	const today = new Date();
	const [selectDate, setSelectDate] = useState<Date | null>(today);

	const onClickDate = (date: Date | null) => {
		setSelectDate(date);
	};
	const { data, isFetched } = useGetCategory();
	console.log(data);

	return (
		<CalendarLayout>
			<LeftSection>
				<MiniCalendar selectDate={selectDate} onClickDate={onClickDate} />
				{isFetched &&
					data &&
					data.map((category: CategoryResponse) => (
						<CategoryBox key={category.email} email={category.email} categoryList={category.categories} />
					))}
			</LeftSection>
			<RightSection>
				<FullCalendarBoxWapper>
					<FullCalendarBox size="big" selectDate={selectDate} />
				</FullCalendarBoxWapper>
			</RightSection>
		</CalendarLayout>
	);
}

const CalendarLayout = styled.div`
	display: flex;
	gap: 1rem;
	box-sizing: border-box;
	height: 76.8rem;
	padding: 1rem 1.6rem 1rem 0.7rem;
`;

const LeftSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	align-items: center;
	box-sizing: border-box;
	width: 33.4rem;
	height: 100%;
`;

const RightSection = styled.section`
	height: 74.8rem;
`;

const FullCalendarBoxWapper = styled.div`
	box-sizing: border-box;
	width: 94.4rem;
	height: 74.8rem;
	padding: 18px 0 0 17px;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;
export default Calendar;
