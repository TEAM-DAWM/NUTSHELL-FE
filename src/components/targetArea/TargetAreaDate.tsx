import styled from '@emotion/styled';

/** nnnn년 nn월 nn일 */
function TargetAreaDate() {
	const today = new Date();
	const date = today.getDate();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();
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
