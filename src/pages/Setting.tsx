import styled from '@emotion/styled';

import DeleteBtn from '@/components/common/button/DeleteBtn';
import DeleteCancelBtn from '@/components/common/button/DeleteCancelBtn';
import EnterBtn from '@/components/common/button/EnterBtn';
import OkayCancelBtn from '@/components/common/button/OkayCancelBtn';
import ProgressBtn from '@/components/common/button/ProgressBtn';
import RefreshBtn from '@/components/common/button/RefreshBtn';
import SettingCheck from '@/components/common/button/settingBtn/SettingCheckBtn';
import SettingDeleteBtn from '@/components/common/button/settingBtn/SettingDeleteBtn';
import SortBtn from '@/components/common/button/SortBtn';
import StatusDoneBtn from '@/components/common/button/statusBtn/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/statusBtn/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/statusBtn/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/statusBtn/StatusTodoBtn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';
import TimelineDeleteBtn from '@/components/common/button/TimelineDeleteBtn';
import TodayPlusBtn from '@/components/common/button/TodayPlusBtn';
import Modal from '@/components/common/modal/Modal';
import NavBar from '@/components/common/NavBar';
import AccountArea from '@/components/SettingPage/AccountArea';
import LogOutBtn from '@/components/SettingPage/LogOutBtn';
import ProfileArea from '@/components/SettingPage/ProfileArea';

function Setting() {
	return (
		<div>
			<NavBar />
			<TextBtn size="big" text="전체" color="BLUE" mode="LIGHT" isHover isPressed />
			<TextBtn size="big" text="전체" color="BLUE" mode="DEFAULT" isHover isPressed />
			<SortBtn text="최신 등록순" />
			<DeleteBtn />
			<DeleteCancelBtn status="delete" />
			<EnterBtn isDisabled={false} />
			<OkayCancelBtn type="okay" />
			<ProgressBtn type="defaultProgress" />
			<RefreshBtn isDisabled={false} />

			<SettingDeleteBtn isHover isPressed />
			<StatusDoneBtn />
			<StatusInProgressBtn />
			<StatusStagingBtn />
			<TimelineDeleteBtn />
			<TodayPlusBtn />

			<Modal isOpen sizeType={{ type: 'long' }} />
			<Modal isOpen sizeType={{ type: 'short' }} />

			<StatusDoneBtn />
			<StatusInProgressBtn />
			<StatusStagingBtn />
			<StatusTodoBtn />
			<SettingCheck size="big" type="complete" isHover isPressed={false} isActive />
			<SettingCheck size="big" type="complete" isHover isPressed={false} isActive />
			<SettingCheck size="big" type="close" isHover isPressed={false} isActive />
			<SettingContainer>
				<Wrapper>
					<ProfileArea />
					<AccountArea />
				</Wrapper>
				<LogOutBtn />
			</SettingContainer>
		</div>
	);
}

export default Setting;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const SettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`;
