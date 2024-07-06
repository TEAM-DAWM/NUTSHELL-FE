import ArrangeBtn from '@/components/common/button/ArrangeBtn';
import DeleteCancelBtn from '@/components/common/button/DeleteCancelBtn';
import EnterBtn from '@/components/common/button/EnterBtn';
import RefreshBtn from '@/components/common/button/RefreshBtn';
import TextBtn from '@/components/common/button/TextBtn';

function Setting() {
	return (
		<div>
			<TextBtn size="medium" text="전체" />
			<EnterBtn />
			<RefreshBtn />
			<DeleteCancelBtn status="delete" />
			<ArrangeBtn text="최신 등록순" />
		</div>
	);
}

export default Setting;
