import { css } from '@emotion/react';

const fonts = {
	PretendardBold: 'Pretendard-Bold',
	PretendardSemiBold: 'Pretendard-SemiBold',
	PretendardMedium: 'Pretendard-Medium',
	PretendardRegular: 'Pretendard-Regular',
};

const fontTheme = {
	DISPLAY_01: css`
		font-size: 6.4rem;
		font-family: ${fonts.PretendardBold};
		line-height: 7.6rem;
		letter-spacing: -2.5%;
	`,

	TITLE_01: css`
		font-size: 4.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 4.5rem;
		letter-spacing: -1%;
	`,
	TITLE_02: css`
		font-size: 3.2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 4rem;
		letter-spacing: 0;
	`,
	TITLE_03: css`
		font-size: 2.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 3.2rem;
		letter-spacing: 0;
	`,

	HEADLINE_01: css`
		font-size: 2.2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 3rem;
		letter-spacing: 0;
	`,
	HEADLINE_02: css`
		font-size: 2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.8rem;
		letter-spacing: 0;
	`,
	HEADLINE_03: css`
		font-size: 1.8rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.4rem;
		letter-spacing: 0;
	`,

	BODY_01: css`
		font-size: 1.6rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.1rem;
	`,
	BODY_02: css`
		font-size: 1.6rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -2%;
	`,
	BODY_03: css`
		font-size: 1.5rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -2%;
	`,
	BODY_04: css`
		font-size: 1.5rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -2%;
	`,

	LABEL_01: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2rem;
		letter-spacing: -1%;
	`,
	LABEL_02: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.4rem;
		letter-spacing: -1%;
	`,
	LABEL_03: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -1%;
	`,

	CAPTION_01: css`
		font-size: 1.2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2rem;
		letter-spacing: -1%;
	`,
	CAPTION_02: css`
		font-size: 1.2rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -1%;
	`,
	CAPTION_03: css`
		font-size: 1.2rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 1.5rem;
		letter-spacing: -1%;
	`,
	CAPTION_04: css`
		font-size: 1.2rem;
		font-family: ${fonts.PretendardRegular};
		line-height: 2rem;
	`,
};
export default fontTheme;
