import styled from '@emotion/styled';
import { useState } from 'react';

import SortBtn from '../../button/SortBtn';

import SORT_BY from '@/constants/sortType';

interface ModalArrangeProps {
	// onClose: React.MouseEventHandler;
}

function ModalArrange({ onClose }: ModalArrangeProps) {
	const [activeSorByDateAdded, setActiveSorByDateAdded] = useState<string | null>(null);
	const [activeSorByDeadLine, setActiveSorByDeadLine] = useState<string | null>(null);

	const handleSortByDateAddedClick = (sortType: string) => {
		setActiveSorByDateAdded((prev) => (prev === sortType ? null : sortType));
	};

	const handleSortByDeadLineClick = (sortType: string) => {
		setActiveSorByDeadLine((prev) => (prev === sortType ? null : sortType));
	};

	return (
		<ModalArrangeLayout onClick={(e) => e.stopPropagation()}>
			<SortBy>
				<SortBtn
					text={SORT_BY.NEWEST}
					isActive={activeSorByDateAdded === SORT_BY.NEWEST}
					onClick={() => handleSortByDateAddedClick(SORT_BY.NEWEST)}
				/>
				<SortBtn
					text={SORT_BY.OLDEST}
					isActive={activeSorByDateAdded === SORT_BY.OLDEST}
					onClick={() => handleSortByDateAddedClick('오래된 등록순')}
				/>
			</SortBy>
			<ModalArrangeLine />
			<SortBy>
				<SortBtn
					text={SORT_BY.CLOSEST}
					isActive={activeSorByDeadLine === SORT_BY.CLOSEST}
					onClick={() => handleSortByDeadLineClick(SORT_BY.CLOSEST)}
				/>
				<SortBtn
					text={SORT_BY.CLOSEST}
					isActive={activeSorByDeadLine === SORT_BY.CLOSEST}
					onClick={() => handleSortByDeadLineClick(SORT_BY.CLOSEST)}
				/>
			</SortBy>
		</ModalArrangeLayout>
	);
}

export default ModalArrange;

const ModalArrangeLayout = styled.div`
	position: absolute;
	top: 3rem;
	left: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	gap: 1.2rem;
	align-items: center;
	justify-content: center;
	width: 10.6rem;
	height: 14.6rem;
	padding: 0.6rem;

	background: ${({ theme }) => theme.palette.Grey.White};
	box-shadow: 0 0.3rem 0.8rem 0 rgb(0 0 0 / 32%);
	border-radius: 10px;
`;

const SortBy = styled.div`
	display: flex;
	flex-direction: column;
`;

const ModalArrangeLine = styled.div`
	display: flex;
	width: 11.8rem;
	height: 0.1rem;

	background-color: ${({ theme }) => theme.palette.Grey.Grey2};
`;
