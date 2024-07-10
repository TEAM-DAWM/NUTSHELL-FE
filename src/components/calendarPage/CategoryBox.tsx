import styled from '@emotion/styled';

function CategoryBox() {
	return (
		<CategoryBoxLayout>
			<TitleSection>카테고리</TitleSection>
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
	width: 100%;
	height: 6.6rem;
	padding: 2rem 0.8rem 1.8rem 2.8rem;
    
	${({ theme }) => theme.fontTheme.HEADLINE_02}
`;
export default CategoryBox;
