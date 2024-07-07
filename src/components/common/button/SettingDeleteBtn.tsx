import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

type Props = {};

const SettingDeleteBtn = (props: Props) => {
	return (
		<SettingDeleteBtnLayout>
			<Icons.DeleteIcon />
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
`;
