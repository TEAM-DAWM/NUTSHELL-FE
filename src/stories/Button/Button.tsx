import styled from '@emotion/styled';

import buttonStyles from './buttonStyle';

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

function Button({
	primary = false,
	backgroundColor,
	size = 'medium',
	label = 'button',
	onClick = () => {},
}: ButtonProps) {
	const mode = primary ? 'storybook-button-primary' : 'storybook-button-secondary';
	const sizeClass = `storybook-button-${size}`;
	return (
		<StyledButton className={`${mode} ${sizeClass}`} style={{ backgroundColor }} onClick={onClick}>
			{label}
		</StyledButton>
	);
}

export default Button;
