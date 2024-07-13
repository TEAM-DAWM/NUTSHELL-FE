export interface ArrangeBtnType {
	type: 'right' | 'left' | 'set' | 'calendar';
	mode: 'DISABLED' | 'DEFAULT';
	color: 'BLUE' | 'WHITE' | 'BLACK';
	size: 'big' | 'small';
	onClick?: React.MouseEventHandler;
	className?: string;
	'aria-label'?: string;
	disabled?: boolean;
}
