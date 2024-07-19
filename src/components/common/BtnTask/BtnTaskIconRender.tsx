import IconHoverContainer from './IconHoverContainer';

import { BtnTaskLocationType } from '@/types/today/BtnTaskLocationType';

type BtnTaskIconRenderProps = {
	location: BtnTaskLocationType;
	iconType: 'stagingOrDelayed' | 'active';
	btnStatus?: string;
	status?: string;
	taskId: number;
	targetDate?: string | null;
};
function BtnTaskIconRender({ location, iconType, btnStatus, status, taskId, targetDate }: BtnTaskIconRenderProps) {
	switch (location) {
		case 'staging':
			return (
				<IconHoverContainer
					iconType={iconType}
					btnStatus={btnStatus}
					status={status}
					taskId={taskId}
					targetDate={targetDate}
				/>
			);
		case 'target':
			return (
				<IconHoverContainer
					iconType={iconType}
					btnStatus={btnStatus}
					status={status}
					taskId={taskId}
					targetDate={targetDate}
				/>
			);
		case 'dashboard':
			return (
				<IconHoverContainer
					iconType={iconType}
					btnStatus={btnStatus}
					status={status}
					taskId={taskId}
					targetDate={targetDate}
				/>
			);

		default:
			break;
	}
}

export default BtnTaskIconRender;
