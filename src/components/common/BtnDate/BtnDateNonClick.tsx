import styled from '@emotion/styled';

import BtnDateText, { TextWrapper } from './BtnDateText';

import Icons from '@/assets/svg/index';

interface BtnDateNonClickProps {
	date?: string;
	time?: string;
	size?: string;
}

function BtnDateNonClick(props: BtnDateNonClickProps) {
	const { date = '마감 기한', time = '마감 시간', size = 'big' } = props;

	const isDefaultDate = date === '마감 기한';
	const isDefaultTime = time === '마감 시간';

	return (
		<BtnDateLayout size={size} isDefaultDate={isDefaultDate} isDefaultTime={isDefaultTime}>
			<BtnDateText icon={<CalanderIcon />} text={date} isDefault={isDefaultDate} size={size} />
			<LineIcon size={size} />
			<BtnDateText icon={<ClockIcon />} text={time} isDefault={isDefaultTime} size={size} />
		</BtnDateLayout>
	);
}

export default BtnDateNonClick;

const CalanderIcon = styled(Icons.Icn_calander, { target: 'CalanderIcon' })`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
`;

const ClockIcon = styled(Icons.Icn_date_clock, { target: 'ClockIcon' })`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
`;

const LineIcon = styled(Icons.Icn_line, { target: 'LineIcon' })<{ size: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 0.1rem;
	height: ${({ size }) => (size === 'big' ? '2.2rem' : '1.2rem')};
`;

const BtnDateLayout = styled.div<{
	size: string;
	isDefaultDate: boolean;
	isDefaultTime: boolean;
}>`
	display: flex;
	gap: 1rem;
	align-items: center;
	width: fit-content;
	min-width: 1.8rem;
	padding: ${({ size }) => (size === 'big' ? '0.5rem 1rem' : '0.5rem 1rem')};

	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;

	${TextWrapper} {
		color: ${({ isDefaultDate, isDefaultTime, theme }) =>
			isDefaultDate || isDefaultTime ? theme.palette.Grey.Grey3 : theme.palette.Grey.Black};
	}
`;
