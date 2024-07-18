import styled from '@emotion/styled';

import { CategoryType } from '@/apis/categoryList/categoryResponse';
import CategoryCheckBox from '@/components/calendarPage/CategoryCheckBox';

interface CategoryBoxProps {
	email: string;
	categoryList: CategoryType[];
}

function CategoryBox({ email, categoryList }: CategoryBoxProps) {
	return (
		<>
			<EmailBox>
				<EmailText>{email}</EmailText>
			</EmailBox>
			<CategoryList>
				{categoryList.map((category) => (
					<CategoryCheckBox key={category.id} category={category.name} />
				))}
			</CategoryList>
		</>
	);
}

const EmailBox = styled.div`
	box-sizing: border-box;
	height: 3.2rem;
	padding: 1rem 0 0 2rem;
`;

const EmailText = styled.p`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: fit-content;
	${({ theme }) => theme.fontTheme.CAPTION_02};
	height: 2.2rem;
	padding: 0.3rem 1.2rem;

	color: ${({ theme }) => theme.palette.Grey.Grey5};

	background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const CategoryList = styled.section`
	display: inline-block;
	height: 34rem;
	padding: 0 0 2rem 1.6rem;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0.6rem;
	}

	::-webkit-scrollbar-thumb {
		width: 0.6rem;

		background-color: ${({ theme }) => theme.palette.Grey.Grey6};
		border-radius: 3px;
	}
`;

export default CategoryBox;
