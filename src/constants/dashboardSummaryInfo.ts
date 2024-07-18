import Icons from '@/assets/svg/index';

const SUMMARY_INFO = [
	{
		name: 'completeTasks',
		text: '완료한 할 일 갯수',
		data: 0,
		unit: '개',
		icon: Icons.Dashboard_Complete,
		imagePate: 'src/assets/images/Dashboard_Complete.png',
	},
	{
		name: 'avgDeferredRate',
		text: '평균 지연율',
		data: 0,
		unit: '%',
		icon: Icons.DashboardPostpone,
		imagePate: 'src/assets/images/Dashboard_Postpone.png',
	},
	{
		name: 'avgInprogressTasks',
		text: '평균 진행중인 할 일 갯수',
		data: 0,
		unit: '개',
		icon: Icons.DashboardProgress,
		imagePate: 'src/assets/images/Dashboard_Progress.png',
	},
];

export default SUMMARY_INFO;
