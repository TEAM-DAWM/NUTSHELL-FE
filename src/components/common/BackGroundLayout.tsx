import styled from '@emotion/styled';

interface BackGroundLayoutProps {
	children: React.ReactNode;
}
function BackGroundLayout({ children }: BackGroundLayoutProps) {
	return <BGLayout>{children}</BGLayout>;
}
const BGLayout = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	background-color: #000;
`;
export default BackGroundLayout;
