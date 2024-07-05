import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const EnterBtn = () => {
	return (
		<EnterBtnLayout>
			<Icons.Arrow_up />
		</EnterBtnLayout>
	);
};

export default EnterBtn;

const EnterBtnCss = css`
	display: flex;
	align-items: center;
	padding: 0.3rem 1.2rem;

	border-radius: 8px;
`;

const EnterBtnLayout = styled.button`
	${EnterBtnCss}
`;
