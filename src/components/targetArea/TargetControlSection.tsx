import styled from '@emotion/styled';

import ArrangeBtn from '../common/arrangeBtn/ArrangeBtn';

import TextBtn from '@/components/common/button/textBtn/TextBtn';

function TargetControlSection() {
	return (
		<TargetControlSectionLayout>
			<BtnWrapper>
				<TextBtn text="오늘" size="small" color="BLACK" mode="DEFAULT" isHover isPressed />
				<ArrangeBtn color="BLACK" mode="DEFAULT" size="small" type="left" />
				<ArrangeBtn color="BLACK" mode="DEFAULT" size="small" type="right" />
			</BtnWrapper>
			<ArrangeBtn color="WHITE" mode="DEFAULT" size="small" type="calendar" />
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

export default TargetControlSection;
