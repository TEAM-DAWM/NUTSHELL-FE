import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import Modal from '../modal/Modal';

import IconHoverContainer from './IconHoverContainer';

import Icons from '@/assets/svg/index';
import BtnDate from '@/components/common/BtnDate/BtnDate';
import MODAL from '@/constants/modalLocation';
import { theme } from '@/styles/theme';
import { TaskType } from '@/types/tasks/taskType';

interface BtnTaskProps extends TaskType {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	iconType: 'stagingOrDelayed' | 'active';
	btnStatus?: '진행중' | '미완료' | '완료' | '오늘로추가';
}

interface BorderColorProps {
	isHovered: boolean;
	isClicked: boolean;
	theme: Theme;
	iconType: string;
	status: string;
}

function BtnTask(props: BtnTaskProps) {
	const { id, name, deadLine, hasDescription, status, handleSelectedTarget, selectedTarget, iconType, btnStatus } =
		props;
	const [isModalOpen, setModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	/** 모달 띄우기 */
	const handleDoubleClick = (e: React.MouseEvent) => {
		if (preventDoubleClick) {
			e.preventDefault();
			return;
		}
		const rect = e.currentTarget.getBoundingClientRect();
		const calculatedTop = rect.top;
		const adjustedTop = Math.min(calculatedTop, MODAL.SCREEN_HEIGHT - MODAL.TASK_MODAL_HEIGHT);
		setTop(adjustedTop);
		setLeft(rect.right + 6);
		setModalOpen((prev) => !prev);
	};

	/** 보더 색상 */
	const handleClick = () => {
		if (selectedTarget?.id === id) {
			handleSelectedTarget(null);
		} else {
			const currentData: TaskType = {
				id,
				name,
				deadLine,
				hasDescription,
				status,
			};
			handleSelectedTarget(currentData);
		}
	};

	/** 모달 닫기 */
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<ModalLayout>
			<BtnTaskLayout
				isClicked={selectedTarget?.id === id}
				isHovered={isHovered}
				iconType={iconType}
				onDoubleClick={handleDoubleClick}
				onClick={handleClick}
				theme={theme}
				status={status}
			>
				<BtnTaskContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<BtnTaskTextWrapper isDescription={hasDescription}>
						{hasDescription && <IconFile />}
						{name}
					</BtnTaskTextWrapper>
					<BtnDate
						date={deadLine?.date || null}
						time={deadLine?.time || null}
						size={{ type: 'short' }}
						isDelayed={status === '지연'}
					/>
				</BtnTaskContainer>
				<IconHoverContainer iconType={iconType} btnStatus={btnStatus} status={status} />
			</BtnTaskLayout>
			<Modal isOpen={isModalOpen} sizeType={{ type: 'short' }} top={top} left={left} onClose={closeModal} taskId={id} />
		</ModalLayout>
	);
}

export default BtnTask;

const getBorderColor = ({ isHovered, isClicked, theme, status }: BorderColorProps) => {
	const defaultColor = theme.palette.Grey.Grey1;
	const hoverColor = theme.palette.Blue.Blue3;
	const clickColor = theme.palette.Primary;
	const orangeColor = theme.palette.Orange.Orange8;
	let borderColor = defaultColor;
	if (status === '지연') {
		borderColor = orangeColor;
	} else if (isClicked) {
		borderColor = clickColor;
	} else if (isHovered) {
		borderColor = hoverColor;
	}
	return css`
		border-color: ${borderColor};
	`;
};

const ModalLayout = styled.div`
	display: flex;
`;

const BtnTaskLayout = styled('div', { target: 'BtnTaskLayout' })`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	min-width: 31rem;

	background: ${({ theme }) => theme.palette.Grey.White};
	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey1};
	border-radius: 8px;

	${getBorderColor}
`;

const BtnTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	align-items: flex-start;
	width: 100%;
	padding: 0.8rem 0 0.8rem 1.2rem;
`;

const BtnTaskTextWrapper = styled.div<{ isDescription: boolean }>`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	align-self: stretch;
	padding-left: ${({ isDescription }) => (isDescription ? '0rem' : '0.4rem')};

	${({ theme }) => theme.fontTheme.LABEL_03};
`;

const IconFile = styled(Icons.IcnFile)`
	width: 1.4rem;
	height: 1.4rem;
`;
