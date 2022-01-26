import styled from '@emotion/styled'

export const InputContainer = styled.div`
	width: 100%;
	height: 50px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	border-radius: 25px;
	position: relative;
	display: flex;
	align-items: center;
	@media ${({ theme }) => theme.device.mobileL} {
		height: 30px;
	}
	.search__icon {
		position: absolute;
		top: 15px;
		left: 20px;
		@media ${({ theme }) => theme.device.mobileL} {
			left: 10px;
			top: 8px;
		}
	}
	.input__text {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		color: ${({ theme }) => theme.colors.fontColor};
		font-weight: 300;
		padding: 10px 0 10px 50px;
		@media ${({ theme }) => theme.device.mobileL} {
			padding: 10px 0 10px 30px;
		}
	}
	.mic__icon {
		position: absolute;
		top: 15px;
		right: 20px;
		@media ${({ theme }) => theme.device.mobileL} {
			right: 10px;
			top: 8px;
		}
	}
`
