import styled from '@emotion/styled';

import ModalBackdrop from './ModalBackdrop';

import useTaskDescription from '@/apis/tasks/taskDescription/query';
import useDeleteTimeBlock from '@/apis/timeBlocks/deleteTimeBlock/query';
import BtnDate from '@/components/common/BtnDate/BtnDate';
import OkayCancelBtn from '@/components/common/button/OkayCancelBtn';
import ModalHeaderBtn from '@/components/common/modal/ModalHeaderBtn';
import ModalTextInputTime from '@/components/common/modal/ModalTextInputTime';
import TextInputBox from '@/components/common/modal/TextInputBox';
import { SizeType } from '@/types/textInputType';
// import formatDatetoLocalDate from '@/utils/formatDatetoLocalDate';

interface ModalProps {
	isOpen: boolean;
	sizeType: SizeType;
	top: number;
	left: number;
	onClose: () => void;
	taskId: number;
	timeBlockId?: number;
	targetDate?: string | null;
}

function Modal({ isOpen, sizeType, top, left, onClose, taskId, targetDate, timeBlockId }: ModalProps) {
	const { data } = useTaskDescription({
		taskId,
		targetDate, // : formatDatetoLocalDate(targetDate)//
		isOpen,
	});
	console.log(data);
	// const dummyData = {
	// 	id: taskId,
	// 	name: 'task name',
	// 	description: 'task description',
	// 	deadLine: {
	// 		date: '2024-06-30',
	// 		time: '12:30',
	// 	},
	// 	status: '진행 중', // 수정
	// 	timeBlock: {
	// 		id: 1,
	// 		startTime: '2024-07-08T12:30',
	// 		endTime: '2024-07-08T14:30',
	// 	},
	// };

	const { mutate } = useDeleteTimeBlock();

	const handleDelete = () => {
		console.log('taskId, timeBlockId', taskId, timeBlockId);

		if (taskId && timeBlockId) {
			mutate({ taskId, timeBlockId });
		} else {
			console.error('taskId 또는 timeBlockId가 존재하지 않습니다.');
		}

		onClose();
	};

	return (
		isOpen && (
			<ModalBackdrop onClick={onClose}>
				<ModalLayout type={sizeType.type} top={top} left={left} onClick={(e) => e.stopPropagation()}>
					<ModalHeader>
						<BtnDate date={data.data.deadLine.date} time={data.data.deadLine.time} />
						<ModalHeaderBtn type={sizeType.type} onDelete={handleDelete} />
					</ModalHeader>
					<ModalBody>
						<TextInputBox type={sizeType.type} name={data.data.name} desc={data.data.description} />
						{sizeType.type === 'long' && <ModalTextInputTime />}
					</ModalBody>
					<ModalFooter>
						<OkayCancelBtn type="cancel" onClick={onClose} />
						<OkayCancelBtn type="okay" onClick={onClose} />
					</ModalFooter>
				</ModalLayout>
			</ModalBackdrop>
		)
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
