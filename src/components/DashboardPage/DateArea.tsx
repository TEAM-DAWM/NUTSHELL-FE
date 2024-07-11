import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

function DateArea() {
	return (
		<DateAreaLayout>
			<PlaceholderWrapper>
				<StlyedCalendarIcon />
				<HardCoding />
				<StyledArrowIcon />
				<HardCoding />
			</PlaceholderWrapper>
			<PastDateWrapper>
				<PastWeekBtn>지난 1주일</PastWeekBtn>
				<PastMonthBtn>지난 1달</PastMonthBtn>
			</PastDateWrapper>
		</DateAreaLayout>
	);
}

export default DateArea;

const DateAreaLayout = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: flex-end;
	justify-content: center;
	width: 51.9rem;
	height: 5.7rem;
	padding: 1rem 0 0.7rem 1.4rem;
`;

const PlaceholderWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 35rem;
	height: 4rem;
	padding: 0.4rem 1.2rem;

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const StlyedCalendarIcon = styled(Icons.Icn_calander)`
	width: 2rem;
	height: 2rem;

	path {
		stroke: ${({ theme }) => theme.palette.Grey.Grey5};
	}
`;

const HardCoding = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 13.9rem;
	height: 3.2rem;
	padding: 0.7rem 1.6rem;
	${({ theme }) => theme.fontTheme.BODY_02};
`;

const StyledArrowIcon = styled(Icons.Icn_arrow_narrow_right)`
	width: 2.4rem;
	height: 2.4rem;

	path {
		stroke: ${({ theme }) => theme.palette.Grey.Black};
	}
`;

const PastDateWrapper = styled.span`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	width: 14.3rem;
	height: 2.6rem;
`;

const PastWeekBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 7.4rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	color: ${({ theme }) => theme.fontTheme.CAPTION_02};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.palette.Grey.Black};
	border: 1px solid;
	border-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const PastMonthBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.3rem;
	height: 2.6rem;
	padding: 0.3rem 1.2rem;

	color: ${({ theme }) => theme.fontTheme.CAPTION_02};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	${({ theme }) => theme.palette.Grey.Black};
	border: 1px solid;
	border-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;
