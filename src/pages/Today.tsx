import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputStaging from '@/components/common/textbox/TextInputStaging';
import TextInputTime from '@/components/common/textbox/TextInputTime';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import TextboxDailydate from '@/components/common/textbox/TextboxDailydate';
import TextboxInput from '@/components/common/textbox/TextboxInput';

type Props = {};

const Today = (props: Props) => {
	return (
		<div>
			Today
			<TextboxInput variant="date" />
			<TextboxInput variant="time" />
			<TextboxInput variant="smallDate" />
			<TextInputTitle type="long" />
			<TextInputTitle type="short" />
			<TextInputDesc type="long" />
			<TextInputDesc type="short" />
			<TextboxDailydate type="long" day="weekday" />
			<TextboxDailydate type="short" day="weekday" />
			<TextInputTime time="start" />
			<TextInputTime time="end" />
			<TextInputTime time="total" />
			<TextInputStaging />
		</div>
	);
};

export default Today;
