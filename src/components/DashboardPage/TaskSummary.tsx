import styled from '@emotion/styled';

interface TaskSummaryProps {
	text: string;
	data: number;
	unit: string;
	icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	image: string;
}

function TaskSummary({ text, data, unit, icon: Icon, image }: TaskSummaryProps) {
	return (
		<TaskSummaryLayout>
			<TextArea>
				<ProfileImg>
					<Icon />
				</ProfileImg>
				<TextWrapper>
					<SummaryText>{text}</SummaryText>
					<NumberTaskBox>
						<Number>{data}</Number>
						<NumberText>{unit}</NumberText>
					</NumberTaskBox>
				</TextWrapper>
			</TextArea>
			<ImageArea>
				<ImageComponent src={image} />
			</ImageArea>
		</TaskSummaryLayout>
	);
}

export default TaskSummary;

const TaskSummaryLayout = styled.div`
	display: flex;
	width: 41.7rem;
	height: 18.2rem;

	background-color: ${({ theme }) => theme.palette.Blue.Blue5};
	border-radius: 16px;
`;

const TextArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: flex-start;
	align-self: center;
	width: 14.5rem;
	height: 11.2rem;
	margin-left: 2.8rem;
`;

const ProfileImg = styled.div`
	width: 2.8rem;
	height: 2.8rem;

	svg {
		width: 100%;
		height: 100%;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 6.4rem;
`;

const SummaryText = styled.p`
	${({ theme }) => theme.fontTheme.HEADLINE_03};
	color: ${({ theme }) => theme.palette.Grey.White};
`;

const NumberTaskBox = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
`;

const Number = styled.p`
	${({ theme }) => theme.fontTheme.TITLE_02};
	color: ${({ theme }) => theme.palette.Grey.White};
`;

const NumberText = styled.p`
	margin-bottom: 0.4rem;

	${({ theme }) => theme.fontTheme.HEADLINE_02};
	color: ${({ theme }) => theme.palette.Grey.White};
`;

const ImageArea = styled.div`
	display: flex;
`;
const ImageComponent = styled.img`
	width: 24.4rem;
	height: 18.2rem;
`;
