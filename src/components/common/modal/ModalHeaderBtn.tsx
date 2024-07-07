import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import { SizeType } from '@/types/textInputType';

function ModalHeaderBtn({ type }: SizeType) {
	return (
		<ModalHeaderBtnLayout>
			<TmpIcon />
			{type === 'long' && <TmpIcon />}
			<TmpIcon />
		</ModalHeaderBtnLayout>
	);
}

const ModalHeaderBtnLayout = styled.div`
	display: flex;
	gap: 0.6rem;
`;

const TmpIcon = styled(Icons.Icn_clock)`
	width: 3.2rem;
	height: 3.2rem;
`;
export default ModalHeaderBtn;
