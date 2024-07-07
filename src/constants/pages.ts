export const PAGE_ROUTE = {
	today: '할 일',
	dashboard: '대시보드',
	calendar: '캘린더',
	setting: '설정',
} as const;

export type PageRouteKeys = keyof typeof PAGE_ROUTE;
export type PageRouteValues = (typeof PAGE_ROUTE)[PageRouteKeys];
