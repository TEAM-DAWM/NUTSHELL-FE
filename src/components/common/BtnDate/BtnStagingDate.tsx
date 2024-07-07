import styled from '@emotion/styled';

function BtnStagingDate() {
	return (
		<BtnStagingDateLayout>
			<BtnStagingDateText>⇥ 마감 기한 설정</BtnStagingDateText>
		</BtnStagingDateLayout>
	);
}

export default BtnStagingDate;

const BtnStagingDateText = styled('p', { target: 'BtnStagingDateText' })`
	color: ${({ theme }) => theme.palette.grey5};
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

	background: ${({ theme }) => theme.palette.grey3};
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		background: ${({ theme }) => theme.palette.grey4};

		${BtnStagingDateText} {
			color: ${({ theme }) => theme.palette.grey6};
		}
	}

	&:active {
		background: ${({ theme }) => theme.palette.grey5};

		${BtnStagingDateText} {
			color: ${({ theme }) => theme.palette.white};
		}
	}
`;
