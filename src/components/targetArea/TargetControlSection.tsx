import styled from '@emotion/styled';

import TextBtn from '@/components/common/button/textBtn/TextBtn';

function TargetControlSection() {
	return (
		<TargetControlSectionLayout>
			<BtnWrapper>
				<TextBtn text="오늘" size="small" color="BLACK" mode="DEFAULT" isHover isPressed />
				<TmpBtn />
				<TmpBtn />
			</BtnWrapper>
			<TmpBtn />
		</TargetControlSectionLayout>
	);
}

const TargetControlSectionLayout = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	margin-bottom: 1.3rem;
	padding: 0 0.4rem;
`;
const BtnWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
	width: fit-content;
`;
const TmpBtn = styled.div`
	width: 2.6rem;
	height: 2.6rem;

	background-color: ${({ theme }) => theme.palette.Grey.Black};
	border-radius: 6.5px;
`;
export default TargetControlSection;
