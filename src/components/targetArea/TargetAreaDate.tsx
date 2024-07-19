import styled from '@emotion/styled';

import formatDatetoStrinKor from '@/utils/formatDatetoStringKor';

/** nnnn년 nn월 nn일 */
interface TargetAreaDateProps {
	targetDate: string;
}

function TargetAreaDate({ targetDate }: TargetAreaDateProps) {
	const dateTypeDate = new Date(targetDate);
	const formatDate = formatDatetoStrinKor(dateTypeDate);
	return <DateText>{formatDate}</DateText>;
}

const DateText = styled.h2`
	${({ theme }) => theme.fontTheme.HEADLINE_02};
	padding: 0.7rem 0.2rem 0.7rem 1rem;
`;

export default TargetAreaDate;
