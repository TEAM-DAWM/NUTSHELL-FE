import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import BtnStagingDate from '@/components/common/BtnDate/BtnStagingDate';

const meta = {
	title: '/Common/BtnDate/BtnStagingDate',
	component: BtnStagingDate,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		onClick: { action: 'clicked' },
	},
	args: {
		date: '2024-09-23',
		onClick: fn(),
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;
export const ButtonStagingDate: Story = {
	args: {
		onClick: fn(),
	},
};
