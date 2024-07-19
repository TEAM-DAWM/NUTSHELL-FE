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
	// targetDate?: string | null;
};
/** 태스크 status 변경 */
// const changeTaskStatus = (updateTaskStatus: string) => {
//     const updateTargetData: UpdateTaskStatusType = {
//         taskId,
//         targetDate,
//         status: updateTaskStatus,
//     };
//     updateTaskStatueMutate(updateTargetData);
// };
function BtnTaskIconRender({
	location,
	dashBoardInprogress,
	btnStatus,
	status,
	taskId,
	// targetDate,
}: BtnTaskIconRenderProps) {
	switch (location) {
		case 'staging':
			// targetDate={targetDate}
			return <StagingIconHoverContainer status={status} taskId={taskId} />;
		case 'target':
			// taskId={taskId} targetDate={targetDate}
			return <TargetIconHoverContainer btnStatus={btnStatus} />;
		case 'dashboard':
			return (
				<DashboardIconHoverContainer
					dashBoardInprogress={dashBoardInprogress}
					// taskId={taskId}
					// targetDate={targetDate}
				/>
			);

		default:
			break;
	}
}

export default BtnTaskIconRender;
