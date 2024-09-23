import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ArrangeBtn from '@/components/common/arrangeBtn/ArrangeBtn';

const meta = {
	title: '/Common/ArrangeBtn',
	component: ArrangeBtn,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['right', 'left', 'set', 'calendar'],
		},
		mode: {
			control: { type: 'select' },
			options: ['DISABLED', 'DEFAULT'],
		},
		color: {
			control: { type: 'select' },
			options: ['BLUE', 'WHITE', 'BLACK'],
		},
		size: {
			control: { type: 'select' },
			options: ['big', 'small'],
		},
		// 현재 사용하지 않는 disabled 속성 주석처리
		// disabled: {
		// 	control: { type: 'boolean' },
		// },
		onClick: { action: 'clicked' },
	},
	args: {
		onClick: fn(),
		type: 'right',
		mode: 'DEFAULT',
		color: 'BLACK',
		size: 'small',
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArrangeButton: Story = {
	args: {
		type: 'right',
		mode: 'DEFAULT',
		color: 'BLACK',
		size: 'small',
		// disabled: false,
	},
};
