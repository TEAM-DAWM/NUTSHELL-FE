import styled from '@emotion/styled';

import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import { SizeType } from '@/types/textInputType';

function TextInputBox({ type }: SizeType) {
	return (
		<TextInputBoxLayout>
			<TextInputTitle type={type} />
			<TextInputDesc type={type} />
		</TextInputBoxLayout>
	);
}

const TextInputBoxLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;
export default TextInputBox;
