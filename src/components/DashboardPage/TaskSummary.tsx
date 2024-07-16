import styled from '@emotion/styled';
import React from 'react';

interface TaskSummaryProps {
	text: string;
	data: number;
	unit: string;
	image: string;
	icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function TaskSummary({ text, data, unit, image, icon }: TaskSummaryProps) {
	return (
		<TaskSummaryLayout image={image}>
			<ProfileImg>{React.createElement(icon)}</ProfileImg>
			<TextWrapper>
				<SummaryText>{text}</SummaryText>
				<NumberTaskBox>
					<Number>{data}</Number>
					<NumberText>{unit}</NumberText>
				</NumberTaskBox>
			</TextWrapper>
		</TaskSummaryLayout>
	);
}

export default TaskSummary;

const TaskSummaryLayout = styled.div<{ image: string }>`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: flex-start;
	align-self: stretch;
	justify-content: center;
	box-sizing: border-box;
	width: 41.7rem;
	height: 18.2rem;
	padding-left: 2.8rem;

	background-color: ${({ theme }) => theme.palette.Blue.Blue5};
	background-image: url(${(props) => props.image});
	background-size: cover;
	border-radius: 16px;
`;

const ProfileImg = styled.div`
	width: 2.8rem;
	height: 2.8rem;
	margin: 3rem 34.5rem 0 0;

	svg {
		width: 100%;
		height: 100%;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	width: 38.9rem;
	height: 6.4rem;
	margin-bottom: 3.5rem;
`;

const SummaryText = styled.p`
	${({ theme }) => theme.fontTheme.HEADLINE_03}
	color: ${({ theme }) => theme.palette.Grey.White}
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
