import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import BtnDate from '@/components/common/BtnDate/BtnDate';

const meta = {
	title: '/Common/BtnDate/BtnDate',
	component: BtnDate,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		date: {
			control: 'text',
		},
		time: {
			control: 'text',
		},
		size: {
			control: { type: 'object' },
			options: [{ type: 'long' }, { type: 'short' }, { type: 'default' }],
		},
		isDelayed: {
			control: 'boolean',
		},
		isDisabled: {
			control: 'boolean',
		},
	},
	args: {
		date: '2024-09-23',
		time: '12:00',
		size: { type: 'default' },
		isDelayed: false,
		isDisabled: false,
		handleDate: fn(),
		handleTime: fn(),
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;
export const DefaultBtnDate: Story = {
	args: {
		date: '2024-09-23',
		time: '12:00',
		size: { type: 'short' },
		isDelayed: false,
		isDisabled: false,
	},
};

export const DisabledBtnDate: Story = {
	args: {
		date: null,
		time: null,
		size: { type: 'default' },
		isDelayed: false,
		isDisabled: true,
	},
};

export const DelayedBtnDate: Story = {
	args: {
		date: '2024-09-24',
		time: '14:00',
		size: { type: 'long' },
		isDelayed: true,
		isDisabled: false,
	},
};
