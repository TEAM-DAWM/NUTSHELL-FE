import styled from '@emotion/styled';

interface BtnStagingDateProps {
	onClick?: () => void;
}

function BtnStagingDate({ onClick }: BtnStagingDateProps) {
	return (
		<BtnStagingDateLayout onClick={onClick}>
			<BtnStagingDateText>⇥ 마감 기한 설정</BtnStagingDateText>
		</BtnStagingDateLayout>
	);
}

export default BtnStagingDate;

const BtnStagingDateText = styled('p', { target: 'BtnStagingDateText' })`
	color: ${({ theme }) => theme.palette.Grey.Grey5};
	font-size: 1.2rem;
	text-align: center;
`;

const BtnStagingDateLayout = styled('div', { target: 'BtnStagingDateLayout' })`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: 2.2rem;
	padding: 0.3rem 1.2rem;

	background: ${({ theme }) => theme.palette.Grey.Grey3};
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		background: ${({ theme }) => theme.palette.Grey.Grey4};

		${BtnStagingDateText} {
			color: ${({ theme }) => theme.palette.Grey.Grey6};
		}
	}

	&:active {
		background: ${({ theme }) => theme.palette.Grey.Grey5};

		${BtnStagingDateText} {
			color: ${({ theme }) => theme.palette.Grey.White};
		}
	}
`;
