import { DayCellContentArg, SlotLabelContentArg } from '@fullcalendar/core';

// 월간 달력에서 날짜 '일' 제거
export const customDayCellContent = (info: DayCellContentArg) => {
	const number = document.createElement('a');
	number.classList.add('fc-daygrid-day-number');
	number.innerHTML = info.dayNumberText.replace('일', '');

	if (info.view.type === 'dayGridMonth') {
		return {
			html: number.outerHTML,
		};
	}

	return {
		domNodes: [],
	};
};

// 일간, 주간에서 왼쪽 시간형식 '12 AM' 으로 만들기
export const customSlotLabelContent = (arg: SlotLabelContentArg) => {
	const formattedTime = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		hour12: true,
	}).format(arg.date);

	const span = document.createElement('span');
	span.innerText = formattedTime;

	return {
		html: span.outerHTML,
	};
};
