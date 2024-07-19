export interface TargetControlSectionProps {
	onClickPrevDate: () => void;
	onClickNextDate: () => void;
	onClickTodayDate: () => void;
	onClickDatePicker: (target: Date) => void;
	targetDate: string;
}
