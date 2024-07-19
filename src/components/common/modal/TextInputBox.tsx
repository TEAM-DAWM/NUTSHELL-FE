import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import { SizeType } from '@/types/textInputType';

interface TextInputBoxProps extends SizeType {
	name: string;
	desc: string;
	onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onDescChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
function TextInputBox({ type, name, desc, onTitleChange, onDescChange }: TextInputBoxProps) {
	return (
		<TextInputBoxLayout>
			<TextInputTitle type={type} name={name} onChange={onTitleChange} />
			<TextInputDesc type={type} desc={desc} onChange={onDescChange} />
		</TextInputBoxLayout>
	);
}

const TextInputBoxLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;
export default TextInputBox;
