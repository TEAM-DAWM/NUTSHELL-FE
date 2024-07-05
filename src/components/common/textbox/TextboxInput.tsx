import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface TextboxInputType {
	type: 'date' | 'time';
}
const TextboxInput = ({ type }: TextboxInputType) => {
	return (
		<>
			{type === 'date' ? (
				<TextboxInputStyle>
					<BoxTextInput type="text" placeholder="2024.07.11" maxLength={10} />
				</TextboxInputStyle>
			) : (
				<TextboxInputStyle>
					<TextboxInputClock />
					<BoxTextInput type="text" placeholder="시간 없음" maxLength={10} />
				</TextboxInputStyle>
			)}
		</>
	);
};
const TextboxInputStyle = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	width: 15.4rem;
	height: 2.6rem;
	padding: 0.3rem 1rem;

	background-color: ${({ theme }) => theme.palette.GRAY_DISABLED};
	border-radius: 8px;

	&:focus-within {
		background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	}
`;
const TextboxInputClock = styled(Icons.Icn_clock)`
	width: 1.4rem;
	height: 1.4rem;
`;
const BoxTextInput = styled.input`
	width: 100%;
	height: 100%;

	background-color: transparent;
	border: none;
	border-radius: 8px;

	&:focus {
		outline: none;
	}
`;
export default TextboxInput;
