import styled from '@emotion/styled';

interface SortBtnProps {
	text: string;
}

function SortBtn({ text }: SortBtnProps) {
	return <SortBtnLayout>{text}</SortBtnLayout>;
}

export default SortBtn;

const SortBtnLayout = styled.button`
	display: flex;
	align-items: center;
	width: 10.5rem;
	height: 2.9rem;
	padding: 7px;

	color: ${({ theme }) => theme.palette.Grey.Grey6};

	background-color: ${({ theme }) => theme.palette.Grey.White};
	border-radius: 6px;

	${({ theme }) => theme.fontTheme.CAPTION_01}; /* 수정 필요 */

	&:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey1};
	}

	&:active {
		color: ${({ theme }) => theme.palette.Grey.Grey7};

		background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	}
`;
