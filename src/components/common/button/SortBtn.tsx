import styled from '@emotion/styled';

interface SortBtnProps {
	text: string;
	isActive?: boolean;
	onClick?: () => void;
}

function SortBtn({ text, isActive = false, onClick }: SortBtnProps) {
	return (
		<SortBtnLayout onClick={onClick} isActive={isActive}>
			{text}
		</SortBtnLayout>
	);
}

export default SortBtn;

const SortBtnLayout = styled.button<{ isActive: boolean }>`
	display: flex;
	align-items: center;
	width: 10.5rem;
	height: 2.9rem;
	padding: 0.7rem;

	color: ${({ theme, isActive }) => (isActive ? theme.palette.Grey.Grey7 : theme.palette.Grey.Grey6)};

	background-color: ${({ theme, isActive }) => (isActive ? theme.palette.Grey.Grey3 : theme.palette.Grey.White)};
	border-radius: 6px;

	${({ theme }) => theme.fontTheme.CAPTION_04};

	&:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey1};
	}
`;
