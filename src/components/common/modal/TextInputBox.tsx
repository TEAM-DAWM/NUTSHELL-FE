import styled from '@emotion/styled';

import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import { SizeType } from '@/types/textInputType';

interface TextInputBoxProps extends SizeType {
	name: string;
	desc: string;
}
function TextInputBox({ type, name, desc }: TextInputBoxProps) {
	return (
		<TextInputBoxLayout>
			<TextInputTitle type={type} name={name} />
			<TextInputDesc type={type} desc={desc} />
		</TextInputBoxLayout>
	);
}

const TextInputBoxLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;
export default TextInputBox;
