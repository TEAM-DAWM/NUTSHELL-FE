import ArrangeBtn from '@/components/common/arrangeBtn/ArrangeBtn';

function DashBoard() {
	return (
		<div>
			<ArrangeBtn type="right" color="blue" mode="default" size="small" />
			<ArrangeBtn type="left" color="blue" mode="default" size="small" />
			<ArrangeBtn type="set" color="blue" mode="default" size="small" />
			<ArrangeBtn type="calendar" color="blue" mode="default" size="small" />
		</div>
	);
}

export default DashBoard;
