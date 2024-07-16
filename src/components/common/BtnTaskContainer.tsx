import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

const BtnTaskContainer = styled.div<{ type: string }>`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 31.8rem;
	height: ${({ type }) => (type === 'staging' ? '56.7rem' : '64rem')};
	overflow: auto;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0.6rem;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${theme.palette.Grey.Grey6};
		visibility: hidden;
		border-radius: 3px;
	}

	&:hover::-webkit-scrollbar-thumb {
		visibility: visible;
	}
`;

export default BtnTaskContainer;
