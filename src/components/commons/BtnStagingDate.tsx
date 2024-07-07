import styled from '@emotion/styled';

const BtnStagingDate = () => {
	return (
		<BtnStagingDateLayout>
			<BtnStagingDateText>⇥ 마감 기한 설정</BtnStagingDateText>
		</BtnStagingDateLayout>
	);
};

export default BtnStagingDate;

const BtnStagingDateText = styled('p', { target: 'BtnStagingDateText' })`
	color: ${({ theme }) => theme.palette.grey5};
	text-align: center;
	font-size: 1.2rem;
`;

const BtnStagingDateLayout = styled('div', { target: 'BtnStagingDateLayout' })`
	display: flex;
	width: fit-content;
	height: 2.2rem;
	padding: 0.3rem 1.2rem;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	border-radius: 0.8rem;
	background: ${({ theme }) => theme.palette.grey3};
	cursor: pointer;

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
