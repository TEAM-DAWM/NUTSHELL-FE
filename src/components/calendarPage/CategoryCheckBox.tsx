import styled from '@emotion/styled';
import { useState } from 'react';

import Icons from '@/assets/svg/index';

interface CategoryCheckBoxProps {
	category: string;
}

function CategoryCheckBox({ category }: CategoryCheckBoxProps) {
	const [isClicked, setIsClicked] = useState(false);

	const handleCheckBoxClick = () => {
		setIsClicked((prev) => !prev);
	};

	return (
		<CategoryContent>
			{isClicked && <CheckBoxBtn onClick={handleCheckBoxClick}/> : <StlyedDoneIc onClick={handleCheckBoxClick}/>}
			<CategoryTitle>{category}</CategoryTitle>
		</CategoryContent>
	);
}

const CategoryContent = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	width: 100%;
	height: 3.2rem;

	${({ theme }) => theme.fontTheme.BODY_02};
	color: ${({ theme }) => theme.palette.Grey.Grey7};
`;

const SelectedIcon = styled(Icons.Icn_selectbox_selected)`
		width: 1.6rem;
    height: 1.6rem;
`;

const CheckBoxBtn = styled.div<{ isClicked: boolean }>`
	width: 1.6rem;
	height: 1.6rem;
	margin: 0.8rem;

	background-color: ${({ theme }) => theme.palette.Grey.White};
	cursor: pointer;
	border: 2px solid ${({ theme }) => theme.palette.Grey.Grey5};
	border-radius: 4px;

	appearance: none;

	&:checked {
		background-image: url(${Icons.Icn_selectbox_selected});
		background-repeat: no-repeat;
		background-position: center;
		border: 2px solid ${({ theme }) => theme.palette.Primary};
	}
`;

const CategoryTitle = styled.p`
	height: 2.4rem;
`;
export default CategoryCheckBox;
