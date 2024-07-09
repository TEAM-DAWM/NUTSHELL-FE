import styled from '@emotion/styled';

import BtnTask from '../BtnTask/BtnTask';
import ScrollGradient from '../ScrollGradient';
import TextInputStaging from '../textbox/TextInputStaging';

import StagingAreaSetting from './StagingAreaSetting';

function StagingArea() {
	return (
		<StagingAreaLayout>
			<StagingAreaContainer>
				<StagingAreaUpContainer>
					<StagingAreaTitle>쏟아내기</StagingAreaTitle>
					<StagingAreaTaskContainer>
						<StagingAreaSetting />
						<BtnTaskContainer>
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<BtnTask btnType={1} />
							<ScrollGradient />
						</BtnTaskContainer>
					</StagingAreaTaskContainer>
				</StagingAreaUpContainer>
				<TextInputStaging />
			</StagingAreaContainer>
		</StagingAreaLayout>
	);
}

export default StagingArea;

const StagingAreaLayout = styled.div`
	display: inline-flex;
	gap: 0.8rem;
	align-items: center;
	padding: 0 0.7rem;

	border-right: 1px solid #e4e4e4;
	border-radius: 0 12px 12px 0;
`;

const StagingAreaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 76.8rem;
	padding-bottom: 2.8rem;
`;

const StagingAreaUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
`;

const StagingAreaTitle = styled.div`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
	padding: 2.8rem 3.6rem 2.1rem 1.2rem;
	${({ theme }) => theme.fontTheme.HEADLINE_02};
`;

const StagingAreaTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	align-items: flex-start;
	align-self: stretch;
`;

const BtnTaskContainer = styled.div`
	width: 100%;
	height: 56.7rem;
	overflow: scroll;
`;
