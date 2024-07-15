import styled from '@emotion/styled';
import { Droppable } from 'react-beautiful-dnd';

import StagingAreaTaskContainer from './StagingAreaTaskContainer';

import TextInputStaging from '@/components/common/textbox/TextInputStaging';
import { TaskType } from '@/types/tasks/taskType';

interface StagingAreaProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks: TaskType[];
}
function StagingArea(props: StagingAreaProps) {
	const { handleSelectedTarget, selectedTarget, tasks } = props;
	return (
		<StagingAreaLayout>
			<StagingAreaContainer>
				<StagingAreaUpContainer>
					<StagingAreaTitle>쏟아내기</StagingAreaTitle>
					<Droppable droppableId="staging">
						{(provided) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								<StagingAreaTaskContainer
									handleSelectedTarget={handleSelectedTarget}
									selectedTarget={selectedTarget}
									tasks={tasks}
								/>
							</div>
						)}
					</Droppable>
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
	padding: 0 0.1rem 0 0.7rem;

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
