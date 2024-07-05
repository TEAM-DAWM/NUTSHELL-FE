import TextboxInput from '@/components/common/textbox/TextboxInput';

type Props = {};

const Today = (props: Props) => {
	return (
		<div>
			Today
			<TextboxInput type="date" />
			<TextboxInput type="time" />
		</div>
	);
};

export default Today;
