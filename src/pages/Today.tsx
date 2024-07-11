import BtnDate from '@/components/common/BtnDate/BtnDate';
import BtnStagingDate from '@/components/common/BtnDate/BtnStagingDate';
import BtnTask from '@/components/common/BtnTask/BtnTask';
import StatusDoneBtn from '@/components/common/button/statusBtn/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/statusBtn/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/statusBtn/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/statusBtn/StatusTodoBtn';
import ModalArrange from '@/components/common/modal/ModalArrange/ModalArrange';
import NavBar from '@/components/common/NavBar';
import ScrollGradient from '@/components/common/ScrollGradient';
import StagingArea from '@/components/common/StagingArea/StagingArea';
import TextboxDailydate from '@/components/common/textbox/TextboxDailydate';
import TextboxInput from '@/components/common/textbox/TextboxInput';
import TextInputDesc from '@/components/common/textbox/TextInputDesc';
import TextInputStaging from '@/components/common/textbox/TextInputStaging';
import TextInputTime from '@/components/common/textbox/TextInputTime';
import TextInputTitle from '@/components/common/textbox/TextInputTitle';
import TargetArea from '@/components/targetArea/TargetArea';

function Today() {
	return (
		<>
			<NavBar />

			<ModalArrange />

			<ScrollGradient />

			<StagingArea />

			<BtnTask btnType="staging" hasDescription id={99} name="예시" status="미완료" />

			<p>Done</p>
			<BtnTask btnType="target" hasDescription id={99} name="예시" status="완료" />
			<p>InProgress</p>
			<BtnTask btnType="target" hasDescription id={99} name="예시" status="진행중" />
			<p>Todo(default)</p>
			<BtnTask btnType="target" hasDescription id={99} name="예시" status="미완료" />

			<p>Staging</p>
			<BtnTask btnType="target" hasDescription id={99} name="예시" status="지연" />

			<p>Done</p>
			<StatusDoneBtn />
			<p>InProgress</p>
			<StatusInProgressBtn />
			<p>Staging</p>
			<StatusStagingBtn />
			<p>Todo</p>
			<StatusTodoBtn />

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
			<BtnDate date="2024.07.11" size={{ type: 'long' }} />
			<BtnDate date="2024.07.11" size={{ type: 'short' }} />
			<BtnDate date="2024.07.11" size={{ type: 'short' }} isDelayed />
			<BtnStagingDate />
			<TargetArea />
		</>
	);
}

export default Today;
