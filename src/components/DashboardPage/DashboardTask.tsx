import styled from '@emotion/styled';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import ScrollGradient from '@/components/common/ScrollGradient';

interface DashboardTaskProps {
	text: string;
}

function DashboardTask({ text }: DashboardTaskProps) {
	return (
		<TaskLayout>
			<TextBox>
				<TaskText text={text}>{text}</TaskText>
				<NumberTextBox>
					<Number>2</Number>
					<NumberText>개</NumberText>
				</NumberTextBox>
			</TextBox>
			<ScrollArea>
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<BtnTask btnType="target" status="Done" isDescription={false} />
				<ScrollGradient />
			</ScrollArea>
		</TaskLayout>
	);
}
export default DashboardTask;

const TaskLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	width: 41.7rem;
	height: 41rem;

	border: 1px solid #dedede;
	border-radius: 12px;
`;

const TextBox = styled.span`
	display: flex;
	justify-content: space-between;
	width: 41.7rem;
	height: 7rem;
`;

const TaskText = styled.div<{ text: string }>`
	display: flex;
	align-items: flex-start;
	min-width: 11.8rem;
	padding: 1.8rem 0 2rem 2.2rem;
	${({ theme }) => theme.fontTheme.HEADLINE_02};

	color: ${({ theme }) => theme.palette.Grey.Black};
`;

const NumberTextBox = styled.div`
	display: flex;
	align-items: center;
	width: 3.8rem;
	height: 4rem;
	margin: 1.5rem 2.2rem 1.5rem 0;
`;

const Number = styled.p`
	${({ theme }) => theme.fontTheme.TITLE_02};
	color: ${({ theme }) => theme.palette.Grey.Grey8};
`;

const NumberText = styled.p`
	${({ theme }) => theme.fontTheme.HEADLINE_02}
	color: ${({ theme }) => theme.palette.Grey.Grey7}
`;

const ScrollArea = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	align-items: stretch;
	box-sizing: border-box;
	width: 41.7rem;
	height: 33.9rem;
	padding: 0 0.7rem;
	overflow: scroll;
`;
