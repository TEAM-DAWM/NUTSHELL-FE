import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

function TodayPlusBtn() {
	return (
		<TodayPlusBtnLayout>
			<StyledPlusArrow />
			<Text>오늘로 추가</Text>
		</TodayPlusBtnLayout>
	);
}

export default TodayPlusBtn;

const TodayPlusBtnCss = css`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	justify-content: center;
	width: 8.9rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const TodayPlusBtnLayout = styled.button`
	${TodayPlusBtnCss}
	color: ${({ theme }) => theme.palette.Primary};

	background-color: ${({ theme }) => theme.palette.Blue.Blue2};

	path {
		stroke: ${({ theme }) => theme.palette.Primary};
	}

	&:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
	}

	&:active {
		color: ${({ theme }) => theme.palette.Grey.White};

		background-color: ${({ theme }) => theme.palette.Primary};

		path {
			stroke: ${({ theme }) => theme.palette.Grey.White};
		}
	}
`;

const Text = styled.p`
	text-align: center;

	${({ theme }) => theme.fontTheme.CAPTION_02};
`;

const StyledPlusArrow = styled(Icons.PlusArrow)`
	width: 1rem;
	height: 1rem;
`;
