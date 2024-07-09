import styled from '@emotion/styled';

const FullCalendarLayout = styled.div<{ size: string }>`
	width: ${({ size }) => (size === 'big' ? '89.7rem' : '58rem')};
	height: 93rem;

	.fc .fc-toolbar.fc-header-toolbar {
		margin-bottom: 1.8rem;
	}

	.fc .fc-timegrid-slot-label-cushion {
		padding: 0 1.2rem 0 0;
	}

	/* 이벤트 박스 */
	.fc-event-main {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 0.4rem 0.6rem;

		color: ${(color) => color.theme.palette.Grey.Grey8};

		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
		box-shadow: 2px 0 0 0 ${({ theme }) => theme.palette.Primary} inset;
		border: none;
		border-radius: 4px;
		${({ theme }) => theme.fontTheme.CAPTION_03};
	}

	.fc-v-event .fc-event-main-frame {
		height: auto;
	}

	.fc-daygrid-day-top {
		height: 0;
	}

	/* 요일 행 TEXT 중간 정렬 */
	.fc td,
	.fc th {
		vertical-align: middle;
		${({ theme }) => theme.fontTheme.CAPTION_01};
	}

	/* 타임 그리드 30분당 일정 */
	.fc .fc-timegrid-slot-label {
		width: 5.7rem;
		height: 2.4rem;

		color: ${(color) => color.theme.palette.Grey.Grey6};

		border-bottom: none;
	}

	/* 요일 행 첫번째 border 없애기 */
	.fc-theme-standard td:first-of-type,
	.fc-theme-standard th:first-of-type {
		border: none;
	}

	/* 타임 그리드 종일 일정 */
	.fc-scrollgrid-shrink {
		max-height: 2.4rem;
	}

	/* 타임 그리드 종일 마진 없애기 */
	.fc .fc-daygrid-body-natural .fc-daygrid-day-events {
		margin: 0;

		border-bottom: 1px solid ${({ theme }) => theme.palette.Grey.Grey9};
	}

	/* 30분 줄선 지우기 */
	.fc .fc-timegrid-slot-minor {
		border-top-style: none;
	}

	/* 요일 헤더 높이 조정 */

	.fc .fc-col-header-cell {
		box-sizing: border-box;
		height: 5.5rem;
		padding: 0.4rem 0.8rem 0.6rem;

		border-right: none;
		border-left: none;
		border-radius: 8px 8px 0 0;
	}

	/* 주말 색 다르게 */
	.fc .fc-day-sun,
	.fc .fc-day-sat {
		background: ${({ theme }) => theme.palette.Blue.Blue1};
	}

	.fc .fc-button-primary:not(:disabled).fc-button-active {
		background: ${({ theme }) => theme.palette.Primary};
	}

	.fc .fc-button-primary:focus {
		box-shadow: none;
	}

	/* Custom button styles */
	.fc-toolbar-chunk .fc-button {
		width: 4.5rem;
		height: 2.6rem;
		padding: 0;

		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
		border: none;
		border-radius: 8px;
	}

	.fc-toolbar-chunk .fc-button:active {
		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
	}

	/* Override the button group border-radius styles */
	.fc-direction-ltr .fc-button-group > .fc-button {
		margin-right: 0.4rem;
		margin-left: 0;

		border-radius: 8px;
	}

	/* 스타일링 현재 시간 표시 */
	.fc .fc-timegrid-now-indicator-line {
		height: 0.2rem;

		background-color: ${({ theme }) => theme.palette.Primary};
		border: none;
	}

	/* 시간 세로줄 테두리 없애기 */
	.fc-timegrid-axis {
		color: ${({ theme }) => theme.palette.Grey.Grey6};

		border: none;
	}

	/* 오늘 배경색 없애기 */
	.fc .fc-day-today {
		background: none;
	}

	/* event에 있는 기본 스타일 지우기  */
	.fc-timegrid-event-harness-inset .fc-timegrid-event {
		box-shadow: none;
		border: none;
	}

	/* event inset 적용 */
	.fc-timegrid-event-harness > .fc-timegrid-event {
		inset: 0.1rem;
	}

	/* 좌우 버튼 스타일 */
	.fc-toolbar-chunk .fc-prev-button,
	.fc-toolbar-chunk .fc-next-button {
		width: 2.6rem;
		height: 2.6rem;
		padding: 0;

		background-color: ${({ theme }) => theme.palette.Grey.Black};
	}

	.fc-toolbar-chunk .fc-button:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue8};
	}

	.fc-toolbar-chunk .fc-prev-button:hover,
	.fc-toolbar-chunk .fc-next-button:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey7};
	}

	.fc-direction-ltr .fc-toolbar > * > :not(:first-of-type) {
		margin-left: 0.4rem;
	}

	.fc-button-active:focus {
		box-shadow: none;
	}

	.fc-toolbar-chunk {
		display: flex;
		align-items: center;
	}

	/* 오늘 버튼 */
	.fc-toolbar-chunk .fc-today-button {
		background-color: ${({ theme }) => theme.palette.Grey.Black};
		opacity: 1;
	}

	.fc-toolbar-chunk .fc-today-button:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey7};
	}

	.fc-toolbar-chunk .fc-today-button:active {
		background-color: ${({ theme }) => theme.palette.Grey.Grey8};
	}

	.fc .fc-button-group {
		margin-left: 5.4rem;
	}

	.fc .fc-custom-button {
		background-color: ${({ theme }) => theme.palette.Grey.Black};
	}

	.fc .fc-custom-button:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey7};
	}

	/* 오늘 버튼 마진 */
	.fc .fc-toolbar-title {
		margin-right: 0.75rem;
		padding: 0 1rem;
		${({ theme }) => theme.fontTheme.HEADLINE_02};
	}

	/* 종일 이벤트 테두리 */
	.fc .fc-daygrid-day-frame .fc-event-main {
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		height: 2.1rem;
		padding: 0.3rem 1.2rem;

		color: ${({ theme }) => theme.palette.Grey.White};

		background-color: ${({ theme }) => theme.palette.Primary};
		border: none;
	}

	.fc .fc-daygrid-event-harness {
		margin: 0;
	}

	.fc .fc-daygrid-day-frame .fc-daygrid-event-harness {
		background-color: ${({ theme }) => theme.palette.Grey.White};
	}

	.fc .fc-daygrid-event {
		margin: 0;
	}

	.fc .fc-cell-shaded {
		display: none;
	}

	/* 현재시간 화살표 지우기 */
	.fc-timegrid-now-indicator-arrow {
		display: none;
	}

	.fc-direction-ltr .fc-daygrid-event {
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		height: 2.1rem;
		margin: 0.1rem;

		background-color: ${({ theme }) => theme.palette.Primary};
	}

	.fc .fc-daygrid-dot-event {
		padding: 0.4rem 0.6rem;

		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
		border-left: 2px solid ${({ theme }) => theme.palette.Primary};
		border-radius: 4px;
	}

	.fc .fc-h-event {
		border: none;
	}

	.fc-daygrid-event-dot {
		display: none;
	}

	.fc .fc-timegrid-axis-frame {
		justify-content: flex-start;
	}

	/* 시간 왼쪽에 붙이기 */
	.fc-direction-ltr .fc-timegrid-slot-label-frame {
		text-align: left;
	}

	/* 이벤트 꽉차게 */
	.fc-direction-ltr .fc-timegrid-col-events {
		margin: 0;
	}

	/* 버튼 focus 그림자 없애기 */
	.fc .fc-button-primary:not(:disabled).fc-button-active:focus,
	.fc .fc-button-primary:not(:disabled):active:focus {
		box-shadow: none;
	}

	/* 바깥 테두리 없애기 */
	.fc .fc-scrollgrid-liquid {
		height: 65.5rem;
		overflow: auto;

		border: none;

		scrollbar-width: thin;
		scrollbar-color: ${({ theme }) => theme.palette.Grey.Grey6} transparent;
	}

	/* 스크롤 커스텀 */
	.fc-scrollgrid-liquid::-webkit-scrollbar {
		width: 0.6rem;
	}

	.fc-scrollgrid-liquid::-webkit-scrollbar-thumb {
		width: 0.6rem;

		background-color: ${({ theme }) => theme.palette.Grey.Grey6};
		border-radius: 3px;
	}

	/* stylelint-disable selector-class-pattern */

	/* 일간에는 주말표시 안하기 */
	.fc .fc-timeGridDay-view .fc-day-sun,
	.fc .fc-timeGridDay-view .fc-day-sat {
		background: none;
	}

	.fc-dayGridMonth-view .fc-day-sun .fc-daygrid-day-frame {
		box-shadow: 0 1px 0 0 ${({ theme }) => theme.palette.Grey.Grey9} inset;
	}

	.fc .fc-dayGridMonth-view .fc-scrollgrid-section-body table {
		border: 1px solid ${({ theme }) => theme.palette.Grey.Grey9};
	}

	.fc .fc-timeGridDay-view .fc-col-header-cell-cushion {
		float: left;
	}

	/* stylelint-enable selector-class-pattern */
`;

export default FullCalendarLayout;
