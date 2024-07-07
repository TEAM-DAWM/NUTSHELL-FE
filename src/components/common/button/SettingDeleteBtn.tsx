import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const SettingDeleteBtn = () => {
	return (
		<SettingDeleteBtnLayout>
			<StyledDeleteIcon />
		</SettingDeleteBtnLayout>
	);
};

export default SettingDeleteBtn;

const SettingDeleteBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingDeleteBtnLayout = styled.button`
	${SettingDeleteBtnCss}
	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* 수정 필요 */

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.PRIMARY}; /* 수정 필요 */
	}
`;

const StyledDeleteIcon = styled(Icons.DeleteIcon)`
	width: 1.35rem;
	height: 1.35rem;
`;