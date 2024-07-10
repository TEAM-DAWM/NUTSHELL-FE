export interface TextBtnType {
	mode: 'LIGHT' | 'DEFAULT';
	color: 'BLUE' | 'WHITE' | 'BLACK';
	size: 'small' | 'big';
	text: string;
	isHover: boolean;
	isPressed: boolean;
	onClick?: () => void;
}
