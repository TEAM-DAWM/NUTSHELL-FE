import { SlotLabelContentArg } from '@fullcalendar/core';

interface SlotLabelContentProps {
	arg: SlotLabelContentArg;
}

function SlotLabelContent({ arg }: SlotLabelContentProps) {
	const formattedTime = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		hour12: true,
	}).format(arg.date);
	return <span>{formattedTime}</span>;
}

export default SlotLabelContent;
