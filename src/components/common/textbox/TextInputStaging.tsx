import styled from '@emotion/styled';

type Props = {};

const TextInputStaging = (props: Props) => {
	return (
		<StagingLayout>
			<TextArea placeholder="해야하는 일들을 쏟아내보세요." />
			<BtnWrapper>
				<TmpBtn />
				<TmpBtn />
			</BtnWrapper>
		</StagingLayout>
	);
};
const StagingLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	width: 31rem;
	height: 7.4rem;
	padding: 0.8rem;

	border: solid 1px ${({ theme }) => theme.palette.GREY_02};
	border-radius: 8px;
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 100%;

	border: none;

	${({ theme }) => theme.fontTheme.LABEL_03};
	&:focus {
		outline: none;
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: fit-content;
`;

/** 임시 버튼 */
const TmpBtn = styled.div`
	width: 5rem;
	height: 2.2rem;

	background-color: ${({ theme }) => theme.palette.GREY_04};
`;
export default TextInputStaging;
