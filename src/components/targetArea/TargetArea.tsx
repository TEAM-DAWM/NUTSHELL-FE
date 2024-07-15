import styled from '@emotion/styled';

import TargetAreaDate from './TargetAreaDate';
import TargetControlSection from './TargetControlSection';
import TargetTaskSection from './TargetTaskSection';
import { TaskType } from '@/types/tasks/taskType';
interface TargetAreaProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
}
function TargetArea({ handleSelectedTarget, selectedTarget }: TargetAreaProps) {
	return (
		<TargetAreaLayout>
			{/* 날짜 */}
			<DateWrapper>
				<TargetAreaDate />
			</DateWrapper>

			{/* 버튼 */}
			<TargetControlSection />

			{/* 태스크 목록 */}
			<TargetTaskSection handleSelectedTarget={handleSelectedTarget} selectedTarget={selectedTarget} />
		</TargetAreaLayout>
	);
}
const TargetAreaLayout = styled.section`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-items: flex-start;
	height: 74.8rem;
	margin: 1rem;
	padding: 0 0.1rem 0 0.7rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;

// 변화 가능성 있어 우선 wrapper로 컴포넌트에 간접적으로 간격 조정함
const DateWrapper = styled.div`
	padding: 1.8rem 0 2rem;
`;

export default TargetArea;
