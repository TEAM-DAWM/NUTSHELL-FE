import styled from '@emotion/styled';

import TargetAreaDate from './TargetAreaDate';
import TargetControlSection from './TargetControlSection';
import TargetTaskSection from './TargetTaskSection';

function TargetArea() {
	return (
		<TargetAreaLayout>
			{/* 날짜 */}
			<DateWrapper>
				<TargetAreaDate />
			</DateWrapper>

			{/* 버튼 */}
			<TargetControlSection />

			{/* 태스크 목록 */}
			<TargetTaskSection />
		</TargetAreaLayout>
	);
}
const TargetAreaLayout = styled.section`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-items: flex-start;
	width: 31rem;
	height: 100vh;
	padding: 0 0.7rem;

	border: 1px solid ${({ theme }) => theme.palette.grey3};
	border-radius: 12px;
`;

// 변화 가능성 있어 우선 wrapper로 컴포넌트에 간접적으로 간격 조정함
const DateWrapper = styled.div`
	padding: 1.8rem 0 2rem;
`;

export default TargetArea;
