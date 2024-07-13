import OkayCancelBtn from '@/components/common/button/OkayCancelBtn';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
	title: 'Button/OkayCancelBtn', // 스토리북에 올릴 component폴더 계층 구조,
	component: OkayCancelBtn, // 스토리를 만들 컴포넌트 이름
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Okay: Story = {
	args: {
		type: 'okay',
	},
};

export const Cancel: Story = {
	args: {
		type: 'cancel',
	},
};
