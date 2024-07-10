import styled from '@emotion/styled';

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
	${({ theme }) => theme.fontTheme.HEADLINE_02};
	padding: 20px 8px 18px 28px;
`;

const EmailBox = styled.div`
	padding: 10px 0 0 20px;
`;

const EmailText = styled.p`
	display: inline-block;
	height: 2.2rem;
	padding: 0.3rem 1.2rem;

	${({ theme }) => theme.fontTheme.CAPTION_02};
	color: ${({ theme }) => theme.palette.Grey.Grey5};

	background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
`;

const CategoryList = styled.section`
	display: inline-block;
	padding-left: 1.6rem;
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
	border: 2px solid ${({ theme }) => theme.palette.Grey.Grey5};
	border-radius: 4px;

	appearance: none;

	&:checked {
		color: ${({ theme }) => theme.palette.Grey.White};

		background-color: ${({ theme }) => theme.palette.Primary};
		border-color: ${({ theme }) => theme.palette.Primary};
	}

	&:checked::after {
		display: flex;
		align-items: center;
		justify-content: center;

		color: ${({ theme }) => theme.palette.Grey.White};
		font-size: 1rem;

		content: '';
	}
`;
const CategoryTitle = styled.p`
	height: 2.4rem;
`;
export default CategoryBox;
