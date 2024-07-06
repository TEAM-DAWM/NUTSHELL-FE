import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

import { PAGE_ROUTE } from '@/constants/pages';

type NavBarIconProps = {
	type: '할 일' | '대시보드' | '캘린더' | '설정';
	onClick: () => void;
	isCurrent: boolean;
};

function NavBarIcon({ type, onClick, isCurrent }: NavBarIconProps) {
	return (
		<IconLayout onClick={onClick}>
			<IconContainer $isCurrent={isCurrent}>
				{type === PAGE_ROUTE.today && <TodayIcon />}
				{type === PAGE_ROUTE.dashboard && <DashboardIcon />}
				{type === PAGE_ROUTE.calendar && <CalendarIcon />}
				{type === PAGE_ROUTE.setting && <SettingIcon />}
			</IconContainer>
			<Caption>{type}</Caption>
		</IconLayout>
	);
}
const IconLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 6.4rem;
`;
const IconContainer = styled.div<{ $isCurrent: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	background-color: ${({ theme, $isCurrent }) => $isCurrent && theme.palette.BLUE_DISABLED};
	border-radius: 8px;
`;
const iconStyle = css`
	width: 2.4rem;
	height: 2.4rem;
`;

const createStyledIcon = (IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>) => styled(
	IconComponent
)`
	${iconStyle}
`;
const TodayIcon = createStyledIcon(Icons.Navbar.Icn_nav_today);
const DashboardIcon = createStyledIcon(Icons.Navbar.Icn_nav_dashboard);
const CalendarIcon = createStyledIcon(Icons.Navbar.Icn_nav_calendar);
const SettingIcon = createStyledIcon(Icons.Navbar.Icn_nav_setting);

const Caption = styled.p`
	${({ theme }) => theme.fontTheme.CAPTION_02};
	color: ${({ theme }) => theme.palette.PRIMARY};
	white-space: nowrap;
`;
export default NavBarIcon;
