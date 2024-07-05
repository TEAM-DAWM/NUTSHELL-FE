import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import TextboxInput from '@/components/common/textbox/TextboxInput';

type Props = {};

const Today = (props: Props) => {
	return (
		<div>
			Today
			<TextboxInput type="date" />
			<TextboxInput type="time" />
			<TextInputTitle type="long" />
			<TextInputTitle type="short" />
		</div>
	);
};

export default Today;
