import BtnDate from '@/components/common/BtnDate/BtnDate';
import BtnStagingDate from '@/components/common/BtnDate/BtnStagingDate';
import TextboxDailydate from '@/components/common/textbox/TextboxDailydate';
import TextboxInput from '@/components/common/textbox/TextboxInput';
import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputStaging from '@/components/common/textbox/TextInputStaging';
import TextInputTime from '@/components/common/textbox/TextInputTime';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';

function Today() {
	return (
		<>
			<TextboxInput variant="date" />
			<TextboxInput variant="time" />
			<TextboxInput variant="smallDate" />
			<TextInputTitle type="long" />
			<TextInputTitle type="short" />
			<TextInputDesc type="long" />
			<TextInputDesc type="short" />
			<TextboxDailydate type="long" />
			<TextboxDailydate type="short" />
			<TextInputTime time="start" />
			<TextInputTime time="end" />
			<TextInputTime time="total" />
			<TextInputStaging />
			<BtnDate date="2024.07.11" size="big" />
			<BtnStagingDate />
		</>
	);
}

export default Today;
