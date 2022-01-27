import styled from '@emotion/styled'

export const SkillContainer = styled.div`
	width: 80%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	row-gap: 60px;
	column-gap: 50px;
	@media ${({ theme }) => theme.device.tabletL} {
		width: 100%;
		row-gap: 40px;
		column-gap: 30px;
	}
	@media ${({ theme }) => theme.device.tablet} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${({ theme }) => theme.device.mobileL} {
		grid-template-columns: repeat(3, 1fr);
		row-gap: 30px;
	}
	.skill__name {
		color: ${({ theme }) => theme.colors.fontColor};
		font-size: ${({ theme }) => theme.fontSizes.base};
		font-weight: 100;
		@media ${({ theme }) => theme.device.mobileL} {
			font-size: 12px;
		}
	}
`

export const SkillBox = styled.div<{ index: number }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	transition: 0.5s;
	z-index: ${({ index }) => index};
	cursor: pointer;
	&:hover {
		filter: brightness(70%);
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 5px;
	}
`

export const SkillTooltip = styled.div<{ description: string }>`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.bgColor};
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 20;
	> img {
		width: 60%;
	}
	> a {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&::before {
		content: '${({ description }) => description}';
		position: absolute;
		top: 40px;
		background-color: ${({ theme }) => theme.colors.bgColor};
		color: ${({ theme }) => theme.colors.fontColor};
		width: 200px;
		padding: 10px 15px;
		line-height: 1.6;
		font-size: 16px;
		font-weight: 200;
		border-radius: 5px;
		text-align: center;
		opacity: 0;
		pointer-events: none;
		transition: 0.3s ease-out;
		@media ${({ theme }) => theme.device.mobileL} {
			width: 135px;
			padding: 8px 12px;
			font-size: 10px;
		}
		@media ${({ theme }) => theme.device.mobileL} {
			width: 100px;
			padding: 7px 11px;
			font-size: 9px;
		}
		@media ${({ theme }) => theme.device.mobileS} {
			width: 80px;
		}
	}
	&:hover {
		&::before {
			top: 90px;
			opacity: 1;
			@media ${({ theme }) => theme.device.mobileL} {
				top: 55px;
			}
		}
	}
`
