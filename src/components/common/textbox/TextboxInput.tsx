import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';
import { theme } from '@/styles/theme';
import dotFormatDate from '@/utils/dotFormatDate';
import formatDatetoString from '@/utils/formatDatetoString';

interface TextboxInputProps {
	variant: 'date' | 'time' | 'smallDate';
	dateValue?: Date | null;
	onChange?: (date: Date) => void;
	dateTextRef?: React.RefObject<HTMLInputElement>;
}
function TextboxInput({ variant, dateValue, onChange, dateTextRef }: TextboxInputProps) {
	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			const formattedInput = dotFormatDate(e.target.value);
			e.target.value = formattedInput;
			if (formattedInput && formattedInput.length > 9) {
				const valueDate = new Date(formattedInput);
				onChange(valueDate);
			}
		}
	};
	return (
		<InputContainer variant={variant}>
			{variant === 'time' && <ClockIcon />}
			<StyledInput
				type="text"
				placeholder={variant === 'time' ? '시간 없음' : formatDatetoString(dateValue)}
				maxLength={10}
				variant={variant}
				onChange={handleDateChange}
				ref={dateTextRef}
			/>
		</InputContainer>
	);
}
const smallDateStyle = css`
	width: 7.5rem;
	padding: 0;
`;
const smallDateInputStyle = css`
	padding: 0;

	text-align: center;

	&:focus {
		outline: solid 1px ${theme.palette.Primary};
	}
`;
const InputContainer = styled.div<{ variant: 'date' | 'time' | 'smallDate' }>`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	width: 15.4rem;
	height: 2.6rem;
	padding: 0.3rem 1rem;

	background-color: ${({ theme }) => theme.palette.Grey.Grey1};
	border-radius: 8px;

	&:focus-within {
		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
		outline: solid 1px ${theme.palette.Primary};
	}

	${({ variant }) => variant === 'smallDate' && smallDateStyle}
`;
const StyledInput = styled.input<{ variant: 'date' | 'time' | 'smallDate' }>`
	width: 100%;
	height: 100%;

	${({ theme }) => theme.fontTheme.CAPTION_01};
	background-color: transparent;
	border: none;
	border-radius: 8px;

	&:focus {
		outline: none;
	}

	${({ variant }) => variant === 'smallDate' && smallDateInputStyle}
`;

const ClockIcon = styled(Icons.Icn_clock)`
	width: 1.4rem;
	height: 1.4rem;
`;

export default TextboxInput;
