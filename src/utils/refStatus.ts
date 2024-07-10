import { theme } from '@/styles/theme';

/** ref 경고 */
export const warnRef = (ref: React.RefObject<HTMLInputElement>) => {
	ref.current?.focus();
	ref.current?.style.setProperty('outline', `solid 1px ${theme.palette.Orange.Orange8}`);
	ref.current?.style.setProperty('background-color', `${theme.palette.Orange.Orange1}`);
};

/** ref 경고 취소 */
export const blurRef = (ref: React.RefObject<HTMLInputElement>) => {
	ref.current?.blur();
	ref.current?.style.setProperty('outline', `none`);
	ref.current?.style.setProperty('background-color', `${theme.palette.Grey.Grey1}`);
};
