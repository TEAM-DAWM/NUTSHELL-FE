import styled from '@emotion/styled';

interface ArrangeBtnProps {
	text: string;
}

function ArrangeBtn({ text }: ArrangeBtnProps) {
	return <ArrangeBtnLayout>{text}</ArrangeBtnLayout>;
}

export default ArrangeBtn;

const ArrangeBtnLayout = styled.button`
	display: flex;
	align-items: center;
	width: fit-content;
	height: 2.6rem;
	padding: 7px;

	color: ${({ theme }) => theme.palette.GREY_06};

	background-color: ${({ theme }) => theme.palette.grey4};
	border-radius: 6px;

	${({ theme }) => theme.fontTheme.CAPTION_01}; /* 수정 필요 */

	&:hover {
		color: ${({ theme }) => theme.palette.GREY_06};

		background-color: ${({ theme }) => theme.palette.GREY_01};

		${({ theme }) => theme.fontTheme.CAPTION_01}; /* 수정 필요 */
	}

	&:active {
		color: ${({ theme }) => theme.palette.GREY_06}; /* 수정 필요 */

		background-color: ${({ theme }) => theme.palette.GREY_03};

		${({ theme }) => theme.fontTheme.CAPTION_01}; /* 수정 필요 */
	}
`;
