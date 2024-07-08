import Check1Btn from '@/components/common/button/Check1Btn';
import DeleteBtn from '@/components/common/button/DeleteBtn';
import DeleteCancelBtn from '@/components/common/button/DeleteCancelBtn';
import EnterBtn from '@/components/common/button/EnterBtn';
import HoverBarBtn from '@/components/common/button/HoverBarBtn';
import OkayCancelBtn from '@/components/common/button/OkayCancelBtn';
import ProgressBtn from '@/components/common/button/ProgressBtn';
import RefreshBtn from '@/components/common/button/RefreshBtn';
import SettingCheck2 from '@/components/common/button/SettingCheck2Btn';
import SettingCheck3 from '@/components/common/button/SettingCheck3Btn';
import SettingDeleteBtn from '@/components/common/button/SettingDeleteBtn';
import SettingXBtn from '@/components/common/button/SettingXBtn';
import SortBtn from '@/components/common/button/SortBtn';
import StatusDoneBtn from '@/components/common/button/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/StatusTodoBtn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';
import TimelineDeleteBtn from '@/components/common/button/TimelineDeleteBtn';
import TodayPlusBtn from '@/components/common/button/TodayPlusBtn';
import NavBar from '@/components/common/NavBar';

function Setting() {
	return (
		<div>
			<NavBar />
			<TextBtn size="big" text="전체" color="BLUE" mode="LIGHT" isAction />
			<TextBtn size="big" text="전체" color="BLUE" mode="DEFAULT" isAction={false} />
			<SortBtn text="최신 등록순" />
			<Check1Btn type="setting" />
			<DeleteBtn />
			<DeleteCancelBtn status="delete" />
			<EnterBtn isDisabled={false} />
			<OkayCancelBtn type="okay" />
			<ProgressBtn type="defaultProgress" />
			<RefreshBtn isDisabled={false} />
			<SettingCheck2 />
			<SettingCheck3 />
			<SettingDeleteBtn />
			<SettingXBtn />
			<StatusDoneBtn />
			<StatusInProgressBtn />
			<StatusStagingBtn />
			<StatusTodoBtn />
			<TimelineDeleteBtn />
			<TodayPlusBtn />
			<HoverBarBtn />
		</div>
	);
}

export default Setting;
