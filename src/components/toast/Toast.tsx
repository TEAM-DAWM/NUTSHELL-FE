import styled from '@emotion/styled';
import { useEffect } from 'react';

interface ToastProps {
	message: string;
	onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
	useEffect(() => {
		const timer = setTimeout(onClose, 3000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return <ToastMessage>{message}</ToastMessage>;
}

const ToastMessage = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 2rem;

	color: ${({ theme }) => theme.palette.Grey.Black};
	${({ theme }) => theme.fontTheme.LABEL_02};

	background-color: #fff;
	box-shadow: 0 16px 35px 0 rgb(72 87 120 / 25%);
	transform: translateX(100%);
	opacity: 0;
	border-radius: 5px;

	animation:
		slide-in 0.3s forwards,
		fade-out 0.3s forwards 2.7s;

	&::before {
		margin-right: 1rem;

		color: ${({ theme }) => theme.palette.Primary};
		font-weight: bold;

		content: '!';
	}

	@keyframes slide-in {
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes fade-out {
		to {
			transform: translateX(100%);
			opacity: 0;
		}
	}
`;

export default Toast;
