import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

type Props = {};

const TodayPlusBtn = (props: Props) => {
	return (
		<TodayPlusBtnLayout>
			<Icons.PlusArrow />
			<Text>오늘로 추가</Text>
		</TodayPlusBtnLayout>
	);
};

export default TodayPlusBtn;

const TodayPlusBtnCss = css`
	display: flex;
	gap: 6px;
	align-items: center;
	justify-content: center;
	width: 8.9rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const TodayPlusBtnLayout = styled.button`
	${TodayPlusBtnCss}
`;

const Text = styled.p`
	text-align: center;
`;
