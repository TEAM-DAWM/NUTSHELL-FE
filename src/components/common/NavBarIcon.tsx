import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import Icons from '@/assets/svg/index';

import { PAGE_ROUTE } from '@/constants/pages';

import { theme } from '@/styles/theme';

type NavBarIconProps = {
	name: string;
	type: '할 일' | '대시보드' | '캘린더' | '설정';
	onClick: () => void;
};

function NavBarIcon({ name, type, onClick }: NavBarIconProps) {
	const current = useLocation();
	const iscurrent = current.pathname === `/${type}`;
	return (
		<IconLayout onClick={onClick}>
			<IconContainer $iscurrent={iscurrent}>
				{name === PAGE_ROUTE.today && <TodayIcon $iscurrent={iscurrent} />}
				{name === PAGE_ROUTE.dashboard && <DashboardIcon $iscurrent={iscurrent} />}
				{name === PAGE_ROUTE.calendar && <CalendarIcon $iscurrent={iscurrent} />}
				{name === PAGE_ROUTE.setting && <SettingIcon $iscurrent={iscurrent} />}
			</IconContainer>
			<Caption $iscurrent={iscurrent}>{name}</Caption>
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
const IconContainer = styled.div<{ $iscurrent: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;

	background-color: ${({ theme, $iscurrent }) => $iscurrent && theme.palette.BLUE_DISABLED};
	border-radius: 8px;
`;
const iconStyle = ($iscurrent: boolean) => css`
	width: 2.4rem;
	height: 2.4rem;

	color: ${$iscurrent ? theme.palette.BLUE_DEFAULT : theme.palette.GREY_05};
`;

const createStyledIcon = (IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>) => styled(
	(props: React.SVGProps<SVGSVGElement> & { $iscurrent: boolean }) => {
		const { $iscurrent, ...rest } = props;
		return <IconComponent {...rest} />;
	}
)<{ $iscurrent: boolean }>`
	${({ $iscurrent }) => iconStyle($iscurrent)}
`;

const TodayIcon = createStyledIcon(Icons.Navbar.Icn_nav_today);
const DashboardIcon = createStyledIcon(Icons.Navbar.Icn_nav_dashboard);
const CalendarIcon = createStyledIcon(Icons.Navbar.Icn_nav_calendar);
const SettingIcon = createStyledIcon(Icons.Navbar.Icn_nav_setting);

const Caption = styled.p<{ $iscurrent: boolean }>`
	${({ theme }) => theme.fontTheme.CAPTION_02};
	color: ${({ theme, $iscurrent }) => ($iscurrent ? theme.palette.BLUE_DEFAULT : theme.palette.GREY_05)};
	white-space: nowrap;
`;
export default NavBarIcon;
