import styled from '@emotion/styled';

import getToday from '@/utils/getToday';

/** nnnn년 nn월 nn일 */
function TargetAreaDate() {
	const { year, month, date } = getToday();
	return (
		<DateText>
			{year}년 {month}월 {date}일
		</DateText>
	);
}
const DateText = styled.h2`
	${({ theme }) => theme.fontTheme.HEADLINE_02};
	padding: 0.7rem 0.2rem 0.7rem 1rem;
`;
export default TargetAreaDate;
