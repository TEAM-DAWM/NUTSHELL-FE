import styled from '@emotion/styled';

import formatDatetoStrinKor from '@/utils/formatDatetoStringKor';

/** nnnn년 nn월 nn일 */
interface TargetAreaDateProps {
	targetDate: Date;
}

function TargetAreaDate({ targetDate }: TargetAreaDateProps) {
	const formatDate = formatDatetoStrinKor(targetDate);
	return <DateText>{formatDate}</DateText>;
}

const DateText = styled.h2`
	${({ theme }) => theme.fontTheme.HEADLINE_02};
	padding: 0.7rem 0.2rem 0.7rem 1rem;
`;

export default TargetAreaDate;
