import styled from '@emotion/styled';

function TargetTaskSection() {
	const dummyTaskList = [
		{ id: 0 },
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
		{ id: 10 },
		{ id: 10 },
	];
	return (
		<TaskContainer>
			{dummyTaskList.map((task) => (
				<TmpTask key={task.id} />
			))}
		</TaskContainer>
	);
}
const TaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 64rem;
	overflow: scroll;
`;
const TmpTask = styled.div`
	flex-shrink: 0;
	width: 100%;
	height: 6.2rem;

	background-color: ${({ theme }) => theme.palette.GREY_02};
	border-radius: 8px;
`;
export default TargetTaskSection;
