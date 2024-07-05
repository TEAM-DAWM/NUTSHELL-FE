import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputTime from '@/components/common/textbox/TextInputTime';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import TextboxDailydate from '@/components/common/textbox/TextboxDailydate';
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
			<TextInputDesc type="long" />
			<TextInputDesc type="short" />
			<TextboxDailydate type="long" day="weekday" />
			<TextboxDailydate type="short" day="weekday" />
			<TextInputTime time="start" />
			<TextInputTime time="end" />
			<TextInputTime time="total" />
		</div>
	);
};

export default Today;
