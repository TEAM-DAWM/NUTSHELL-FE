import styled from '@emotion/styled';

function DayDiffText({ diff }: { diff: number }) {
	return (
		<InputTimeLayout>
			<InputTimeStyle>{diff}</InputTimeStyle>
			<MinuteTxt>일</MinuteTxt>
		</InputTimeLayout>
	);
}
const InputTimeLayout = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	height: 2.6rem;

	${({ theme }) => theme.fontTheme.CAPTION_01};
	color: ${({ theme }) => theme.palette.Grey.Grey8};

	border-radius: 8px;
`;

const MinuteTxt = styled.p`
	padding-left: 0.4rem;
`;
const InputTimeStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.6rem;
	height: 2.6rem;

	background-color: ${({ theme }) => theme.palette.Grey.Grey1};
	border-radius: 8px;
`;
export default DayDiffText;
