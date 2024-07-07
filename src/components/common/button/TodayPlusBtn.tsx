import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const TodayPlusBtn = () => {
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
	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* 색 수정 필요 */

	&:hover {
		background-color: ${({ theme }) => theme.palette.GREY_04};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.GREY_05}; /* svg 색 수정 필요 */
	}
`;

const Text = styled.p`
	color: ${({ theme }) => theme.palette.PRIMARY}; /* 폰트 수정 필요 & 아이콘 색상 변경 필요 */
	text-align: center;

	${({ theme }) => theme.fontTheme.CAPTION_01}; /* 폰트 수정 필요 */

	&:active {
		color: ${({ theme }) => theme.palette.WITHE}; /* svg 색 수정 필요 */
	}
`;
