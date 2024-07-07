import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const EnterBtn = () => {
	return (
		<EnterBtnLayout>
			<StyledIcon />
		</EnterBtnLayout>
	);
};

export default EnterBtn;

const EnterBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4rem;
	height: 2.2rem;

	border-radius: 8px;
`;

const EnterBtnLayout = styled.button`
	${EnterBtnCss}
`;

const StyledIcon = styled(Icons.Arrow_up)`
	width: 1.6rem;
	height: 1.6rem;
`;
