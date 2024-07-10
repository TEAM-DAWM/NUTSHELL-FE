import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface CategoryBoxProps {
	email: string;
	categoryList: string[];
}

function CategoryBox({ email, categoryList }: CategoryBoxProps) {
	return (
		<CategoryBoxLayout>
			<TitleSection>카테고리</TitleSection>
			<HeaderSection>
				<TitleBox>카테고리</TitleBox>
				<EmailBox>
					<EmailText>{email}</EmailText>
				</EmailBox>
			</HeaderSection>
			<CategoryList>
				{categoryList.map((category) => (
					<CategoryContent key={category}>
						<CheckBoxBtn type="checkbox" />
						<CategoryTitle>{category}</CategoryTitle>
					</CategoryContent>
				))}
			</CategoryList>
		</CategoryBoxLayout>
	);
}

const CategoryBoxLayout = styled.div`
	width: 31.7rem;
	height: 49rem;

	border: 1px solid #e4e4e4;
	border-radius: 12px;
`;

const TitleSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	width: 31.7rem;
	height: 49rem;
	padding: 2rem 0.8rem 1.8rem 2.8rem;
	${({ theme }) => theme.fontTheme.HEADLINE_02}

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 12px;
`;

const HeaderSection = styled.section`
	width: 100%;
	height: 9.8rem;
`;

const TitleBox = styled.h2`
	box-sizing: border-box;
	height: 6.6rem;
	padding: 2rem 0.8rem 1.8rem 2.8rem;
	${({ theme }) => theme.fontTheme.HEADLINE_02};
`;

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

const CategoryContent = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	width: 100%;
	height: 3.2rem;

	${({ theme }) => theme.fontTheme.BODY_02};
	color: ${({ theme }) => theme.palette.Grey.Grey7};
`;

const CheckBoxBtn = styled.input`
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
export default CategoryBox;
