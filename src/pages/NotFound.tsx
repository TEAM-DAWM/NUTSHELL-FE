import styled from '@emotion/styled';

import Images from '@/assets/images';

function NotFound() {
	return (
		<>
			<ContentContainer>
				<ContentWrapper>
					<SmallLogoImg src={Images.smallLogo} alt="로고" />
					<NotFoundHeader>원하시는 페이지를 찾을 수 없습니다.</NotFoundHeader>
					<NotFoundCaption>
						찾으려는 페이지의 주소가 잘못 입력되었거나, 주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다. 입력하신
						페이지의 주소가 정확한지 다시 한번 확인해 주세요.
					</NotFoundCaption>
				</ContentWrapper>
				<HomeBtn>홈으로 가기</HomeBtn>
			</ContentContainer>
			<NotFoundBgImg src={Images.BG.notFountBg} alt="잘못된 접근 페이지" />
		</>
	);
}

const NotFoundBgImg = styled.img`
	position: absolute;

	/* 이후 고정값으로 배경 보여줘야 할 경우 주석 풀어서 쓰세요 */

	/* width: 136.6rem; */

	/* height: 76.8rem; */
	width: 100%;
	height: 100%;

	background-repeat: no-repeat;
	background-size: contain;
`;
const SmallLogoImg = styled.img`
	width: 4.3rem;
	height: 4.3rem;
`;
const NotFoundHeader = styled.h2`
	${({ theme }) => theme.fontTheme.HEADLINE_02};
`;
const NotFoundCaption = styled.p`
	width: 26rem;

	${({ theme }) => theme.fontTheme.CAPTION_02};
	color: ${({ theme }) => theme.palette.Grey.Grey6};
	word-break: keep-all;
`;
const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
`;
const ContentContainer = styled.div`
	position: absolute;
	top: 25rem;
	left: 27.5rem;
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 2.6rem;
`;
const HomeBtn = styled.button`
	width: fit-content;
	height: fit-content;
	padding: 0.8rem 3.7rem;

	color: ${({ theme }) => theme.palette.Grey.White};

	${({ theme }) => theme.fontTheme.LABEL_01};
	background-color: ${({ theme }) => theme.palette.Grey.Black};
	border-radius: 50px;
`;
export default NotFound;
