import EnterBtn from '@/components/common/button/EnterBtn';
import RefreshBtn from '@/components/common/button/RefreshBtn';
import TextButton from '@/components/common/button/TextButton';

function Setting() {
	return (
		<div>
			<TextButton size="small" text="전체" />
			<EnterBtn />
			<RefreshBtn />
		</div>
	);
}

export default Setting;
