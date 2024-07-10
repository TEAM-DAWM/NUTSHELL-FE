import styled from '@emotion/styled';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import ScrollGradient from '@/components/common/ScrollGradient';
import StagingAreaSetting from '@/components/common/StagingArea/StagingAreaSetting';
import TextInputStaging from '@/components/common/textbox/TextInputStaging';
import { TaskType } from '@/types/tasks/taskType';

function StagingArea() {
	const dummyTaskList: TaskType[] = [
		{
			id: 0,
			name: '바보~',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: false,
			status: '진행중',
		},
		{
			id: 1,
			name: '넛수레',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 2,
			name: '콘하스',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '완료',
		},
		{
			id: 3,
			name: '김지원',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '미완료',
		},
	];
	return (
		<StagingAreaLayout>
			<StagingAreaContainer>
				<StagingAreaUpContainer>
					<StagingAreaTitle>쏟아내기</StagingAreaTitle>
					<StagingAreaTaskContainer>
						<StagingAreaSetting />
						<BtnTaskContainer>
							{dummyTaskList.map((task) => (
								<BtnTask
									key={task.id + task.name}
									btnType="staging"
									hasDescription={task.hasDescription}
									id={task.id}
									name={task.name}
									status={task.status}
									deadLine={task.deadLine}
								/>
							))}
							<ScrollGradient />
						</BtnTaskContainer>
					</StagingAreaTaskContainer>
				</StagingAreaUpContainer>
				<TextInputStaging />
			</StagingAreaContainer>
		</StagingAreaLayout>
	);
}

export default StagingArea;

const StagingAreaLayout = styled.div`
	display: inline-flex;
	gap: 0.8rem;
	align-items: center;
	height: 76.8rem;
	padding: 0 0.7rem;

	border-right: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 0 12px 12px 0;
`;

const StagingAreaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 76.8rem;
	padding-bottom: 2.8rem;
`;

const StagingAreaUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
`;

const StagingAreaTitle = styled.div`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
	padding: 2.8rem 3.6rem 2.1rem 1.2rem;
	${({ theme }) => theme.fontTheme.HEADLINE_02};
`;

const StagingAreaTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	align-items: flex-start;
	align-self: stretch;
`;

const BtnTaskContainer = styled.div`
	width: 100%;
	height: 56.7rem;
	overflow: scroll;
`;
