import styled from '@emotion/styled';
import { useState } from 'react';

import FullCalendarBox from '@/components/common/fullCalendar/FullCalendarBox';
import StagingArea from '@/components/common/StagingArea/StagingArea';
import TargetArea from '@/components/targetArea/TargetArea';
import { TaskType } from '@/types/tasks/taskType';

function Today() {
	const [selectedTarget, setSelectedTarget] = useState<TaskType | null>(null);
	const handleSelectedTarget = (task: TaskType | null) => {
		setSelectedTarget(task);
	};
	return (
		<TodayLayout>
			<StagingArea handleSelectedTarget={handleSelectedTarget} selectedTarget={selectedTarget} />
			<TargetArea handleSelectedTarget={handleSelectedTarget} selectedTarget={selectedTarget} />
			<CalendarWrapper>
				<FullCalendarBox size="small" selectedTarget={selectedTarget} />
			</CalendarWrapper>
		</TodayLayout>
	);
}

export default Today;

const TodayLayout = styled.div`
	display: flex;
`;

const CalendarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: fit-content;
	height: 72.8rem;
	margin: 1rem 0;
	padding: 1.8rem 0.7rem 0 2.3rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;
