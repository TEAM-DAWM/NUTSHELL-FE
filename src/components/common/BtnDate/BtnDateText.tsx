import styled from '@emotion/styled';

interface BtnDateTextProps {
	icon: React.ReactNode;
	text: string;
	isDefault: boolean;
	size: string;
}

function BtnDateText(props: BtnDateTextProps) {
	const { icon, text, isDefault, size } = props;
	return (
		<BtnDateContainer>
			{icon}
			<TextWrapper isDefault={isDefault} size={size}>
				{text}
			</TextWrapper>
		</BtnDateContainer>
	);
}

export default BtnDateText;

export const TextWrapper = styled('div', { target: 'TextWrapper' })<{ isDefault: boolean; size: string }>`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-start;

	color: ${({ isDefault, theme }) => (isDefault ? theme.palette.Grey.Grey5 : theme.palette.Grey.Black)};
	font-size: ${({ size }) => (size === 'big' ? '1.4rem' : '1.2rem')};
`;

const BtnDateContainer = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
`;
