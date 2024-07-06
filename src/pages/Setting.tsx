import ArrangeBtn from '@/components/common/button/ArrangeBtn';
import Check1Btn from '@/components/common/button/Check1Btn';
import DeleteBtn from '@/components/common/button/DeleteBtn';
import DeleteCancelBtn from '@/components/common/button/DeleteCancelBtn';
import EnterBtn from '@/components/common/button/EnterBtn';
import ProgressBtn from '@/components/common/button/ProgressBtn';
import RefreshBtn from '@/components/common/button/RefreshBtn';
import SettingDeleteBtn from '@/components/common/button/SettingDeleteBtn';
import StatusDoneBtn from '@/components/common/button/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/StatusTodoBtn';
import TextBtn from '@/components/common/button/TextBtn';
import TimelineDeleteBtn from '@/components/common/button/TimelineDeleteBtn';
import TodayPlusBtn from '@/components/common/button/TodayPlusBtn';

function Setting() {
	return (
		<div>
			<TextBtn size="medium" text="전체" />
			<EnterBtn />
			<RefreshBtn />
			<DeleteCancelBtn status="delete" />
			<ArrangeBtn text="최신 등록순" />
			<TodayPlusBtn />
			<DeleteBtn />
			<SettingDeleteBtn />
			<Check1Btn type="done" />
			<ProgressBtn type="defaultProgress" />
			<TimelineDeleteBtn />
			<StatusStagingBtn />
			<StatusInProgressBtn />
			<StatusTodoBtn />
			<StatusDoneBtn />
		</div>
	);
}

export default Setting;
