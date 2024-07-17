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
			<ImageComponent src={image} />
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
		</TaskSummaryLayout>
	);
}

export default TaskSummary;

const TaskSummaryLayout = styled.div`
	position: relative;

	width: 41.7rem;
	height: 18.2rem;
`;

const ImageComponent = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const TextArea = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: flex-start;
	width: 17.3rem;
	height: 11.2rem;
	margin-top: 3.5rem;
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
