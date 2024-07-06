import { buttonStyles } from '@/stories/Button/buttonStyle';
import styled from '@emotion/styled';

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;
}

const StyledButton = styled.button`
	${buttonStyles}
`;

export const Button: React.FC<ButtonProps> = ({
	primary = false,
	backgroundColor,
	size = 'medium',
	label = 'button',
	onClick = () => {},
}) => {
	const mode = primary ? 'storybook-button-primary' : 'storybook-button-secondary';
	const sizeClass = `storybook-button-${size}`;
	return (
		<StyledButton className={`${mode} ${sizeClass}`} style={{ backgroundColor }} onClick={onClick}>
			{label}
		</StyledButton>
	);
};
