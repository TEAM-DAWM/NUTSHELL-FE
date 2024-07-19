import DashboardIconHoverContainer from './DashboardIconHoverContainer';
import StagingIconHoverContainer from './StagingIconHoverContainer';
import TargetIconHoverContainer from './TargetIconHoverContainer';

import { BtnTaskLocationType } from '@/types/today/BtnTaskLocationType';

type BtnTaskIconRenderProps = {
	location: BtnTaskLocationType;
	dashBoardInprogress: boolean;
	btnStatus?: string;
	status?: string;
	taskId: number;
	targetDate: string | null;
};

function BtnTaskIconRender({
	location,
	dashBoardInprogress,
	btnStatus,
	status,
	taskId,
	targetDate,
}: BtnTaskIconRenderProps) {
	switch (location) {
		case 'staging':
			return <StagingIconHoverContainer status={status} taskId={taskId} targetDate={targetDate} />;
		case 'target':
			return <TargetIconHoverContainer btnStatus={btnStatus} taskId={taskId} targetDate={targetDate} />;
		case 'dashboard':
			return (
				<DashboardIconHoverContainer
					dashBoardInprogress={dashBoardInprogress}
					taskId={taskId}
					targetDate={targetDate}
				/>
			);

		default:
			break;
	}
}

export default BtnTaskIconRender;
