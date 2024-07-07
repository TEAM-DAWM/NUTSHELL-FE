import { css } from '@emotion/react';

const buttonStyles = css`
	display: inline-block;

	font-weight: 700;
	font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1;

	cursor: pointer;
	border: 0;
	border-radius: 3px;

	&.storybook-button-primary {
		color: #fff;

		background-color: #1ea7fd;
	}

	&.storybook-button-secondary {
		color: #333;

		background-color: transparent;
		box-shadow: rgb(0 0 0 / 15%) 0 0 0 1px inset;
	}

	&.storybook-button-small {
		padding: 10px 16px;

		font-size: 1.2rem;
	}

	&.storybook-button-medium {
		padding: 11px 20px;

		font-size: 1.4rem;
	}

	&.storybook-button-large {
		padding: 12px 24px;

		font-size: 1.6rem;
	}
`;

export default buttonStyles;
