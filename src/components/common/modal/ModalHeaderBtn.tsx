import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

import { SizeType } from '@/types/textInputType';

const ModalHeaderBtn = ({ type }: SizeType) => {
	return (
		<ModalHeaderBtnLayout>
			<Icons.Icn_clock width={32} height={32} />
			{type === 'long' && <Icons.Icn_clock width={32} height={32} />}
			<Icons.Icn_clock width={32} height={32} />
		</ModalHeaderBtnLayout>
	);
};

const ModalHeaderBtnLayout = styled.div`
	display: flex;
	gap: 0.6rem;
`;

export default ModalHeaderBtn;
