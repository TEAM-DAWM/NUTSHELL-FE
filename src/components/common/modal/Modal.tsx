import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useState } from 'react';

import ModalBackdrop from './ModalBackdrop';

import usePatchTaskDescription from '@/apis/tasks/editTask/query';
import useTaskDescription from '@/apis/tasks/taskDescription/query';
import useDeleteTimeBlock from '@/apis/timeBlocks/deleteTimeBlock/query';
import BtnDate from '@/components/common/BtnDate/BtnDate';
import OkayCancelBtn from '@/components/common/button/OkayCancelBtn';
import ModalHeaderBtn from '@/components/common/modal/ModalHeaderBtn';
import ModalTextInputTime from '@/components/common/modal/ModalTextInputTime';
import TextInputBox from '@/components/common/modal/TextInputBox';
import { SizeType } from '@/types/textInputType';
import formatDatetoLocalDate from '@/utils/formatDatetoLocalDate';

interface ModalProps {
	isOpen: boolean;
	sizeType: SizeType;
	top: number;
	left: number;
	onClose: () => void;
	taskId: number;
	targetDate?: string | null;
}
function Modal({ isOpen, sizeType, top, left, onClose, taskId, targetDate = null, timeBlockId }: ModalProps) {
	const [taskName, setTaskName] = useState('');
	const [desc, setDesc] = useState('');
	const [deadLineDate, setDeadLineDate] = useState('');
	const [deadLineTime, setDeadLineTime] = useState('');

	const { data, isFetched } = useTaskDescription({
		taskId,
		targetDate: formatDatetoLocalDate(targetDate),
		isOpen,
	});

	useEffect(() => {
		if (isFetched && data) {
			setTaskName(data.data.name);
			setDesc(data.data.description);
			setDeadLineDate(data.data.deadLine.date);
			setDeadLineTime(data.data.deadLine.time);
		}
	}, [isFetched, data]);

	const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskName(event.target.value);
	};

	const handleDescChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDesc(event.target.value);
	};

	const handleTaskDateChange = (newDate: string) => {
		setDeadLineDate(newDate);
	};

	const handleTaskTimeChange = (newTime: string) => {
		setDeadLineTime(newTime);
	};

	const { mutate: deleteMutate } = useDeleteTimeBlock();
	const { mutate: editMutate } = usePatchTaskDescription();

	// editMutate({ name, description, deadLine: { date, time } });

	const handleDelete = () => {
		console.log('taskId', taskId);

		if (taskId && timeBlockId) {
			deleteMutate({ taskId, timeBlockId });
		} else {
			console.error('taskId가 존재하지 않습니다.');
		}

		onClose();
	};

	const onEdit = () => {
		editMutate({
			taskId,
			name: taskName,
			description: desc,
			deadLine: { date: deadLineDate, time: deadLineTime },
		});
		console.log(taskName, desc, deadLineDate, deadLineTime);

		onClose();
	};

	if (!isOpen || !isFetched) return null;
	return (
		<ModalBackdrop onClick={onClose}>
			<ModalLayout type={sizeType.type} top={top} left={left} onClick={(e) => e.stopPropagation()}>
				<ModalHeader>
					<BtnDate
						date={deadLineDate}
						time={deadLineTime}
						handleDate={handleTaskDateChange}
						handleTime={handleTaskTimeChange}
					/>
					<ModalHeaderBtn type={sizeType.type} onDelete={handleDelete} />
				</ModalHeader>
				<ModalBody>
					<TextInputBox
						type={sizeType.type}
						name={taskName}
						desc={desc}
						onTitleChange={handleTaskNameChange}
						onDescChange={handleDescChange}
					/>
					{sizeType.type === 'long' && <ModalTextInputTime />}
				</ModalBody>
				<ModalFooter>
					<OkayCancelBtn type="cancel" onClick={onClose} />
					<OkayCancelBtn type="okay" onClick={onEdit} />
				</ModalFooter>
			</ModalLayout>
		</ModalBackdrop>
	);
}

const ModalLayout = styled.div<{ type: string; top: number; left: number }>`
	position: fixed;
	top: ${({ top }) => top}px;
	left: ${({ left }) => left}px;
	z-index: 3;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	box-sizing: border-box;
	width: ${({ type }) => (type === 'long' ? '37.2rem' : '32.8rem')};
	padding: 1rem 1.2rem;
	overflow: hidden;

	background-color: ${({ theme }) => theme.palette.Grey.White};
	box-shadow: 0 1.2rem 3rem 0 rgb(0 0 0 / 30%);
	border-radius: 12px;
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const ModalFooter = styled.div`
	display: flex;
	gap: 0.4rem;
	justify-content: flex-end;
`;

export default Modal;
