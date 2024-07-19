import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

function LoadingSpinner() {
	return (
		<SpinnerContainer>
			<Spinner />
		</SpinnerContainer>
	);
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin-top: -0.8rem;
`;

const Spinner = styled.div`
	width: 2.6rem;
	height: 2.6rem;

	border: 4px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-top: 4px solid ${({ theme }) => theme.palette.Primary};
	border-radius: 50%;

	animation: ${spin} 1s linear infinite;
`;

export default LoadingSpinner;
